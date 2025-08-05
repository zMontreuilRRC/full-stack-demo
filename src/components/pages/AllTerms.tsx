import { Term } from "../../types/term";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

/**
 * This component will display all terms provided as props, without any filter.
 */
export function AllTerms(
    {
        terms,
        updateTerms
    }:
    {
        terms: Term[],
        updateTerms: React.Dispatch<React.SetStateAction<Term[]>>
    }
) {
    return(
        <>
        <header>
            <h1>All Terms</h1>
        </header>
        <main>
            {/* Render all of the terms that are passed in, and the update method */}
            <TermListDisplay 
                terms={terms}
                updateTerms={updateTerms} 
                />
        </main>
        </>
    )
}