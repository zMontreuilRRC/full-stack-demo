import { useTerms } from "../../hooks/useTerms";
import { createPortal } from "react-dom";
import { usePopup } from "../../hooks/usePopup";
import PopupMessage from "../common/popup-message/PopupMessage";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";
import { Term } from "../../types/term";

/**
 * title: the title of the page
 * 
 * termDependencies: useTerms initially queries all terms. If the 
 *  termDependency value changes, it will re-query all terms and "refresh" the 
 *  terms in state.
 * 
 * termFilterFn: callback function passed to filter the terms that will appear
 *  on this page (null for all terms)
 */
type TermListPageProps = {
    title: string,
    termDependencies: any[],
    termFilterFn: ((term: Term) => boolean)|null
}

/** 
 * This "wrapper" component for Term Lists lets us reuse the popup and 
 * term-favourite behaviour for wrapped lists.
 */
export function TermListPage({title, termDependencies, termFilterFn}: TermListPageProps) {
    /**
     * These are custom hooks: functions that act like the useState hook, 
     *  but allow additional functionality.
     * 
     * useTerms makes a list of terms, a possible error message for getting/updating terms,
     *  and a function for toggling favourite terms available.
     * 
     * usePopup makes a boolean for the visibility of a popup, the text that should
     *  be on it, and a function for displaying that popup, available.
     */
    const { terms, error, toggleFavouriteTerm } = useTerms(termDependencies, termFilterFn);
    const { popupVisible, popupText, showPopupWithText} = usePopup();

    /**
     * Function passed down to TermLists and eventually TermCards; 
     * determines behaviour for clicking the "favourite" button.
     * @param id: the id of the term that was clicked
     */
    const handleSaveClick = async (id: number) => {
        displayTogglePopup(id);
        await toggleFavouriteTerm(id);
    }
    
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

    return(
        <>
            <h2>{title}</h2>
            <div>
                {error ? 
                    <span className="error">Something went wrong: ({error})</span>:

                    // Display terms that return true for the termFilterFn callback
                    // TermCards in this display invoke handleSaveClick when "favourite" is clicked
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

