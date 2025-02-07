import { TermListDisplay } from "../common";
import { useTerms } from "../../hooks/useTerms";

export function AllTerms() {
    const { terms, toggleFavouriteTerm } = useTerms();

    return(
        <TermListDisplay terms={terms} onSaveClick={toggleFavouriteTerm} />
    )
}