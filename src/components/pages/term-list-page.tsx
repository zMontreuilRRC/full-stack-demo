import { TermListDisplay } from "../common";
import { useTerms } from "../../hooks/useTerms";
import { Term } from "../../interfaces/term";

/** 
 * this "wrapper" page allows us to explicitly set page filters without
 * having to restate the save function on click
 */
export function TermListPage(
    {title, dependencies, filterFn}:
    {
       title: string,
       dependencies: any[],
       filterFn: ((term: Term) => Boolean)|null,
    } 
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