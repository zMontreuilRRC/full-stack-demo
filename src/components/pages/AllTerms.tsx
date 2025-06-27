import { Term } from "../../types/term";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

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
            <TermListDisplay 
                terms={terms}
                updateTerms={updateTerms} 
                />
        </main>
        </>
    )
}