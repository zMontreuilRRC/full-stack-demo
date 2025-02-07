import { TermListDisplay } from "../common";
import { useTerms } from "../../hooks/useTerms";

export function AllTerms() {
    const { terms } = useTerms();

    return(
        <TermListDisplay terms={terms} />
    )
}