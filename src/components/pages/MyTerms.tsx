import { Term } from "../../types/term";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

export function MyTerms({terms}: {terms: Term[]}) {
    return(
        <TermListDisplay 
            terms={terms.filter(t => t.isFavourite)} 
            />
    )
}