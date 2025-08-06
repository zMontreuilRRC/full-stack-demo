import { useTerms } from "../../hooks/useTerms";
import { FrontendTerm as Term } from "@shared/types/frontend-term";
import { createPortal } from "react-dom";
import { usePopup } from "../../hooks/usePopup";
import { TermListDisplay } from "../common/common";
import PopupMessage from "../common/popup-message";

/** 
 * this "wrapper" page allows us to explicitly set page filters without
 * having to restate the save function on click
 */
export function TermListPage(
    {title, dependencies, filterFn}:
    {
       title: string,
       dependencies: any[],
       filterFn: ((term: Term) => Boolean)|null,
    } 
) {
    const { terms, error, toggleFavouriteTerm } = useTerms(dependencies, filterFn);

    const {popupVisible, popupText, showPopupWithText} = usePopup();

    const displayTogglePopup = (id: Number) => {
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
        await toggleFavouriteTerm(id);
        displayTogglePopup(id);
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