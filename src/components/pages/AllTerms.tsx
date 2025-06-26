import { Term } from "../../types/term";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

export function AllTerms(
    {terms}:
    {
        terms: Term[],
    }
) {
    return(
        <TermListDisplay terms={terms} />
    )
}