import { TermListDisplay } from "../common";
import { useSearchParams } from "react-router-dom";
import { useTerms } from "../../hooks/useTerms.ts";
import { Term } from "../../interfaces/term.ts";

export function SearchResult() {
    // since this page has no state at the top it never changes, even when re-routed to.
    // need to change state when navigating to the page from its own location (re-searching).
    // c.f. "useParams" which uses specific route parameters only
    const [searchParams] = useSearchParams();
    const value = searchParams.get("value");

    if(value) {
        const searchFilter = (termEle: Term) => {
            return termEle.title.toLowerCase().includes(
                value.toLowerCase().trim()
            );
        };

        const {terms, toggleFavouriteTerm} = useTerms(searchFilter);
    
        return(
            <main>
                <h2>Results for "{value}"</h2>
                <TermListDisplay 
                terms= {
                    terms
                }
                onSaveClick={toggleFavouriteTerm}
                />
            </main>
        )
    } else {
        return(<h1>Sorry, something went wrong</h1>);
    }
}