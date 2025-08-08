import { TermListPage } from "./TermListPage";

// Render a TermListPage with no dependencies or filter function

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