
// Render a TermListPage with no dependencies or filter function

import { TermListPage } from "../term-list-page/TermListPage";

export function AllTerms() {
    return(
        <main>
            <TermListPage
                title="All Terms"
                termDependencies={[]}
                termFilterFn={null}
            />
        </main>
    )
}