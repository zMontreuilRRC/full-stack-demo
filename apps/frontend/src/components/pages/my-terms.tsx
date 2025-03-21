import { Term } from "@prisma/client";
import { TermListPage } from "./term-list-page";

export function MyTerms() {
    const termFilter = (termEle: Term) => {
        return termEle.isFavourite;
    }

    // TODO: request only favourited terms to reduce load
    return(
        <TermListPage
            title="My Terms"
            dependencies={[]}
            filterFn={termFilter}
        />
    )
}