import { Term } from "../interfaces/term";
import { ToggleSaveButton } from "./common";

// to try: props can be set up as an interface: see https://chatgpt.com/share/67a65920-225c-800e-ad98-1c086fd8944e
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
        {/* clicking on one card's definition may close the defs for other cards */}
        <h3 onClick={() => onTitleClick(term.id)}>
            {term.title}
            {/* TODO: onClick toggles save of term */}
            <ToggleSaveButton 
            // while we would normally want to add saving terms to the TermCard, the state needs to know when a term has been updated
                onClick={() => onSaveClick(term.id)} 
                isSaved={term.isFavourite}
            />
        </h3>
        { isExpanded 
            ? <p>{term.definition}</p>
            : null
        }
    </div>);
}