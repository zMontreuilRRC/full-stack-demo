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
        <TermListDisplay 
            terms={terms}
            updateTerms={updateTerms} />
    )
}