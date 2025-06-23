import { useState } from "react";
import { TermCard } from "../term-card/TermCard";
import { Term } from "../../../types/term";

// props are passed as a single object, which may be destructured in parameters
export function TermListDisplay({terms}: {terms: Term[]}) {
    const [expandedId, setExpandedId] = useState<number|null>(null);

    // annotate type as a list of JSX elements
    // map is the best means of creating a component array
    const termListItems: JSX.Element[] = terms.map((term) => {
        return (
            <TermCard
                term={term} 
                isExpanded={term.id === expandedId} 
                onTitleClick={ 
                    () => {
                        term.id !== expandedId ? setExpandedId(term.id) : setExpandedId(null)
                    }
                }
                key={term.id} 
            />
            // all iterated components should have a Key provided
        )
    });

    return(
        <ol className="terms-list">
            {termListItems}
        </ol>
    )
}