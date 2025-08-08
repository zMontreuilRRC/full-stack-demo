import { Term } from "../../../types/term";
import { TermListPage } from "../term-list-page/TermListPage";


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