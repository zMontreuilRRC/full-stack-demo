import { Term } from "../../types/term.ts";
import { TermListPage } from "./TermListPage.tsx";
import { useSearchParams } from "react-router-dom";

export function SearchResult() {
    // since this page has no state at the top it never changes, even when re-routed to.
    // need to change state when navigating to the page from its own location (re-searching).
    // c.f. "useParams" which uses specific route parameters only
    const [searchParams] = useSearchParams();

    /**
     * NOTE: Value can appear as "state" (since its update will cause re-querying of terms)
     * but it is not stored in state by the app. Instead the URL passes down the variable
     * (like a prop)
     **/ 
    const value = searchParams.get("value");

    if(value) {
        const searchFilter = (termEle: Term) => {
            return termEle.title.toLowerCase().includes(
                value.toLowerCase().trim()
            );
        };

        /**
         * useTerms() must use value as a dependency, because navigating to this page repeatedly
         * does not unmount the entire component -- it will only change the Value.
         * For this reason, value is kept as a dependency.
         * */ 
    
        return(
            <main>
                <TermListPage
                    title = {`Results for "${value}"`}
                    termDependencies={[value]}
                    termFilterFn={searchFilter}
                />
            </main>
        )
    } else {
        return(<h1>Sorry, something went wrong</h1>);
    }
}