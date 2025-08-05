import { Term } from "../../types/term";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

export function MyTerms(
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
            <h1>My Terms</h1>
        </header>
        <main>
            {/* Only terms that have the "isFavourite" property as true will be included */}
            <TermListDisplay 
                terms={terms.filter(t => t.isFavourite)}
                updateTerms={updateTerms} 
                />
        </main>
        </>
    )
}