import { Term } from "../../../types/term";
import ToggleSaveButton from "../toggle-save-button/ToggleSaveButton";
import "./term-card.css";

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
        onTitleClick: () => void,
        onSaveClick: () => void
    }
) {
    return (
    <div className="term-card">
        <div className="term-card-top">
        {/* 
        Since we only want one card expanded at a time, "onTitleClick"
        needs to be passed down from a higher component
        */}
        <h3 onClick={onTitleClick}>
            {term.title}
        </h3>
    
        {/* likewise, the state containing all of the terms needs
        to know if a button's "favourite" status has changed,
        so we pass down a method to update it. */}
        <ToggleSaveButton 
            onClick={onSaveClick} 
            isSaved={term.isFavourite}
        />
        </div>

        {/* Only display the definition if our IsExpanded prop returns True */}
        { isExpanded 
            ? <p>{term.definition}</p>
            : null
        }
    </div>
    );
}