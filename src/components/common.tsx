import { useState } from "react";
import { CheckmarkIcon } from "../assets/checkmark-icon";
import { DiskIcon } from "../assets/disk-pen-svgrepo-com";
import { FrontendTerm as Term } from "@shared/types/frontend-term";
import { TermCard } from "./term-card";
import { SignInButton } from "@clerk/clerk-react";

export function Footer() {
    return(<footer>
        Complexicon &#169; Me, 2025
    </footer>);
}

export function ToggleSaveButton({onClick, isSaved} : {
    onClick: () => void, 
    isSaved: boolean}) 
{
    return(
        <button onClick={onClick}>
            {isSaved ? <CheckmarkIcon /> : <DiskIcon />}
        </button>
    );
}

// props are passed as a single object, which may be destructured in parameters
export function TermListDisplay({terms, onSaveClick}: 
    {
        terms: Term[], 
        onSaveClick: (id: number) => {}
    }) {
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
                        term.id !== expandedId ? 
                            setExpandedId(term.id) : 
                            setExpandedId(null)
                    }
                }
                onSaveClick={onSaveClick}
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

export function NotSignedIn() {
    return (
        <section className="container">
            <h2>Sign in to view this content.</h2>
            <SignInButton>
                <button>Click here to sign in or create an account.</button>
            </SignInButton>
        </section>
    )
}