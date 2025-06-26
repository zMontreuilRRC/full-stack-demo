import { useState } from "react";
import { TermCard } from "../term-card/TermCard";
import { Term } from "../../../types/term";
import "./term-list-display.css"

// props are passed as a single object, which may be destructured in parameters
export function TermListDisplay({
        terms,
        updateTerms
    }:
    {
        terms: Term[],
        updateTerms: React.Dispatch<React.SetStateAction<Term[]>>
    }) {
    const [expandedId, setExpandedId] = useState<number|null>(null);

    /**
     * Updating states with arrays of objects can be complex!
     * We must return a new map of the array, and we also must
     * for each object return a copy of the original, and modify it if we need to.
     */
    const handleTermFavouriteClick = (termClicked: Term): void => {
        updateTerms(oldTermState => {
            // map the array to copy it, modifying if we need to
            return oldTermState.map(t => {
                /**
                 * If our clicked ID matches the mapped term, we return
                 * a destructuring of that object, but with the updated
                 * "favourite" property value
                 */
                if(t.id === termClicked.id) {
                    let newFavourite = !t.isFavourite;
                    return {...t, isFavourite: newFavourite};
                } else {
                    // if not, we just return the original object for mapping.
                    return t;
                }
            })
        });
    }

    // annotate type as a list of JSX elements
    // When creating an array of components, use the "map" method
    const termListItems: JSX.Element[] = terms.map((term) => {
        return (
            <TermCard
                term={term}
                // check state to see if this term's ID is the same as the expanded
                isExpanded={term.id === expandedId}
                
                // pass down a method that changes the expandedId state if the title is clicked
                onTitleClick={ 
                    () => {
                        term.id !== expandedId ? 
                        setExpandedId(term.id) : 
                        setExpandedId(null);
                    }
                }

                // pass down our favourite button click handler
                onSaveClick={() => {
                    handleTermFavouriteClick(term);
                }}

                // all iterated coamponents should have a Key provided
                key={term.id} 
            />
        )
    });

    return(
        <div className="terms-list">
            {termListItems}
        </div>
    )
}