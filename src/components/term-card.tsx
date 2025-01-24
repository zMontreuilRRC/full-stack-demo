import { Term } from "../interfaces/term";
import { ToggleSaveButton } from "./common";

export function TermCard({term, isExpanded, onTitleClick, } 
    : {term: Term, isExpanded: boolean, onTitleClick?: () => void}
) {
    return (
    <div className="term-card">
        {/* clicking on one card's definition closes defs for other cards,
        navigates to main def page, etc */}
        <h3 onClick={onTitleClick}>
            <button>
                {term.title}
            </button>
            {/* TODO: onClick toggles save of term */}
            <ToggleSaveButton onClick={() => null} isSaved={term.isFavourite}/>
        </h3>
        { 
            isExpanded ? (
                <p>
                    {term.definition}
                </p>
            ) : null
        }
    </div>);
}