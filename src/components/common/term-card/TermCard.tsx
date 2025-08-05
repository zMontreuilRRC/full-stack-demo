import { Term } from "../../../types/term";
import { CheckmarkIcon } from "../../../assets/checkmark-icon";
import { DiskIcon } from "../../../assets/disk-pen-svgrepo-com";
import "./term-card.css";

/**
 * This is an example of a "controlled component."
 * It receives its values and methods from a parent component, but informs the parent when
 * something happens (like when a button is clicked on).
 */
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
        needs to be passed down from a higher component.
        We need the card to actually catch the event, so we invoke it with onClick
        */}
        <h3 onClick={onTitleClick}>
            {term.title}
        </h3>
 
        {/* 
            Invoke the onSaveClick prop method when clicked. 
            Display a "check" or "disk" icon if term is/is not favourited    
        */}
        <button onClick={onSaveClick}>
            {term.isFavourite ? <CheckmarkIcon /> : <DiskIcon />}
        </button>
        </div>

        {/* Only display the definition if our IsExpanded prop returns true.
        Commonly known as Conditional Rendering (see https://react.dev/learn/conditional-rendering) */}
        { isExpanded 
            ? <p>{term.definition}</p>
            : null
        }
    </div>
    );
}