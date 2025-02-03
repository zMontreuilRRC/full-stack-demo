import { TermListDisplay } from "../common";
import { useSearchParams } from "react-router-dom";
import { terms as termData } from "../../services/terms.ts";

export function SearchResult() {
    // c.f. "useParams" which uses specific route parameters only
    const [searchParams] = useSearchParams();
    const value = searchParams.get("value");

    if(value) {
        return(
            <main>
                <h2>Results for "{value}"</h2>
                <TermListDisplay 
                terms= {
                    value.trim() 
                    ? termData.filter(t => {
                        return t.title.toLowerCase().includes(
                            value.toLowerCase().trim()
                        )}
                    )
                    : []
                }
                />
            </main>
        )
    } else {
        return(<h1>Sorry, something went wrong</h1>);
    }
}