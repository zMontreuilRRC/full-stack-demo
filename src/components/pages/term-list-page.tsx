import { TermListDisplay } from "../common";
import { useTerms } from "../../hooks/useTerms";
import { Term } from "../../interfaces/term";

export function TermListPage(
    dependencies: Term[],
    filterFn: ((term: Term) => Boolean)|null,
    title: string
) {
    const { terms, toggleFavouriteTerm } = useTerms(dependencies, filterFn);

    return(
        <main>
            <h2>{title}</h2>
            <TermListDisplay 
                terms={terms} 
                onSaveClick={toggleFavouriteTerm} 
            />
        </main>
    )
}