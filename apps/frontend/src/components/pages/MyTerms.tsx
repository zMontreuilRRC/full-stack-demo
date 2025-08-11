import { FrontendTerm as Term } from "@shared/types/frontend-term";
import { TermListPage } from "./TermListPage";

export function MyTerms() {
    const termFilter = (termEle: Term) => {
        return termEle.isFavourite;
    }

    return(
        <main>
            <TermListPage
                title="My Terms"
                dependencies={[]}
                filterFn={termFilter}
            />
        </main>
    )
}