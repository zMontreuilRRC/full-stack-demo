import { useTerms } from "../../hooks/useTerms";
import { Term } from "../../interfaces/term";
import { TermListDisplay } from "../common";

export function MyTerms() {
    const termFilter = (termEle: Term) => {
        return termEle.isFavourite;
    }

    const { terms, toggleFavouriteTerm } = useTerms([], termFilter);
    // TODO: request only favourited terms to reduce load
    return(
        <TermListDisplay 
            terms={terms.filter(t => t.isFavourite)} 
            onSaveClick={toggleFavouriteTerm}
        />
    )
}