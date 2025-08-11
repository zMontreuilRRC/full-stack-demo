import { FrontendTerm as Term } from "@shared/types/frontend-term";
import { CheckmarkIcon } from "../../../assets/checkmark-icon";
import { DiskIcon } from "../../../assets/disk-pen-svgrepo-com";

export function TermCard(
    {
        term, 
        isExpanded, 
        onTitleClick,
        onSaveClick
    } 
    : {
        term: Term, 
        isExpanded: boolean, 
        onTitleClick: (id: number) => void,
        onSaveClick: (id: number) => void,
    }
) {
    return (
    <div className="term-card">
        <div className="card-header">
        {/* clicking on one card's definition may close the defs for other cards */}
            <h3 onClick={() => onTitleClick(term.id)}>
                {term.title}
            </h3>
            <button onClick={() => onSaveClick(term.id)}>
                {term.isFavourite ? <CheckmarkIcon /> : <DiskIcon />}
            </button>
        </div>
        { isExpanded 
            ? <p>{term.definition}</p>
            : null
        }
    </div>);
}