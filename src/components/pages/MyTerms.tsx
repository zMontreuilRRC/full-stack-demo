import { TermListPage } from "./TermListPage";
import { Term } from "../../types/term";

export function MyTerms() {
    const termFilter = (termEle: Term) => {
        return termEle.isFavourite;
    }
    
    return(
        <main>
            <TermListPage
                title="My Terms"
                termDependencies={[]}
                termFilterFn={termFilter}
            />
        </main>
    )
}