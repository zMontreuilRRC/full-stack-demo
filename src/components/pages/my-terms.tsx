import { useTerms } from "../../hooks/useTerms";
import { TermListDisplay } from "../common";

export function MyTerms() {
    const { terms } = useTerms();
    // TODO: request only favourited terms to reduce load
    return(
        <TermListDisplay terms={terms.filter(t => t.isFavourite)} />
    )
}