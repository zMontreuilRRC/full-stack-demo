import { TermListDisplay } from "../common";
import { useTerms } from "../../hooks/useTerms";
import { Term } from "@prisma/client";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import PopupMessage from "../popup-message";

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
    const [ showPopup, setShowPopup ] = useState<Boolean>(false);
    const [ popupText, setPopupText ] = useState<string>("");
    // useRef allows us to store mutable values across multiple renders. 
    // In this case track the timeout reference id
    const timeoutRef = useRef<number | null>(null); 

    const displayTogglePopup = (id: Number) => {
        const toggledTerm = terms.find(t => t.id === id);

        if(!toggledTerm) {
            setPopupText("Error getting term.");
        } else {
            setPopupText(toggledTerm?.isFavourite ? 
                `Removed ${toggledTerm.title} from favourites`: 
                `Added ${toggledTerm.title} to favourites`  
            );
        }

        setShowPopup(true);
        
        // reset timer if already in use
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setShowPopup(false);
        }, 3000)
    }

    return(
        <main>
            <h2>{title}</h2>
            <div>
                {error ? 
                    <span className="error">Something went wrong ({error})</span>:
                    <TermListDisplay 
                        terms={terms} 
                        onSaveClick={ 
                            async (id) => {
                                await toggleFavouriteTerm(id);
                                displayTogglePopup(id);
                            }
                        } 
                    />
                }
            </div>
            {/* short-circuit method for creating portal conditionally */}
            {showPopup && createPortal(
                <PopupMessage message={popupText} />
            , document.body)}
        </main>
    )
}