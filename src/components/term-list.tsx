import { useState } from "react";
import { Term } from "../interfaces/term";
import { TermCard } from "./term-card";

export function TermList({terms} : {terms: Term[]}) {
    // allow usage of only a number or null value when setting state
    // Explain this behaviour in detail: invoking setExpandedTermKey
    // causes React to update any components whose props have changed
    const [expandedTermKey, setExpandedTermKey] = useState<number | null>(null);

    return(
        <ol className="terms-list">
            {
                terms.map((term, index) => 
                <TermCard term={term} 
                    isExpanded={index === expandedTermKey} 
                    onTitleClick={() => {
                        if (index === expandedTermKey) {
                            setExpandedTermKey(null)
                         } else {
                             setExpandedTermKey(index)
                         }     
                        }
                    }
                    key={index}
                />
                )
            }
        </ol>
    )
}