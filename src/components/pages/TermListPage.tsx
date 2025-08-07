import { useTerms } from "../../hooks/useTerms";
import { createPortal } from "react-dom";
import { usePopup } from "../../hooks/usePopup";
import PopupMessage from "../common/popup-message/PopupMessage";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";
import { Term } from "../../types/term";

/** 
 * this "wrapper" page allows us to explicitly set page filters without
 * having to restate the save function on click
 */
export function TermListPage(
    {title, dependencies, filterFn}:
    {
       title: string,
       dependencies: any[],
       filterFn: ((term: Term) => boolean)|null,
    } 
) {
    const { terms, error, toggleFavouriteTerm } = useTerms(dependencies, filterFn);

    const {popupVisible, popupText, showPopupWithText} = usePopup();

    const displayTogglePopup = (id: number) => {
        const toggledTerm = terms.find(t => t.id === id);
        let newPopupText = "";
        if(!toggledTerm) {
            newPopupText = "Error getting term.";
        } else {
            newPopupText = toggledTerm?.isFavourite ? 
                `Removed ${toggledTerm.title} from favourites`: 
                `Added ${toggledTerm.title} to favourites`  
            ;
        }
        showPopupWithText(newPopupText);
    }

    const handleSaveClick = async (id: number) => {
        displayTogglePopup(id);
        await toggleFavouriteTerm(id);
    }

    return(
        <>
            <h2>{title}</h2>
            <div>
                {error ? 
                    <span className="error">Something went wrong: ({error})</span>:
                    <TermListDisplay 
                        terms={terms} 
                        onSaveClick={ 
                            async (id: number) => {
                                await handleSaveClick(id);
                            }
                        } 
                    />
                }
            </div>
            {/* short-circuit method for creating portal conditionally */}
            {popupVisible && createPortal(
                <PopupMessage message={popupText} />
            , document.body)}
        </>
    )
}