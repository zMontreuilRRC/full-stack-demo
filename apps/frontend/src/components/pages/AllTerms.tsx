import { TermListPage } from "./TermListPage";

export function AllTerms() {

    return(
        <main>
            <TermListPage
                title="All Terms"
                dependencies={[]}
                filterFn={null}
            />
        </main>
    )
}