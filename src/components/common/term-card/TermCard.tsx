import { Term } from "../../../types/term";
import ToggleSaveButton from "../toggle-save-button/ToggleSaveButton";

export function TermCard({term, isExpanded, onTitleClick, } 
    : {term: Term, isExpanded: boolean, onTitleClick: (id: number) => void}
) {
    return (
    <div className="term-card">
        {/* clicking on one card's definition may close the defs for other cards */}
        <h3 onClick={() => onTitleClick(term.id)}>
            {term.title}
            {/* TODO: onClick toggles save of term */}
            <ToggleSaveButton 
                onClick={() => null} 
                isSaved={term.isFavourite}
            />
        </h3>
        { isExpanded 
            ? <p>{term.definition}</p>
            : null
        }
    </div>);
}