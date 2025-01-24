import { Search } from "./search";
import { TermList } from "./term-list";

export function Landing() {
    return (
        <>
        <header>
            <h1>Complexicon</h1>
            <span>Make complex terms simple to understand!</span>
        </header>
        <main>
            <Search />
            <h2>My Saved terms</h2>
            <TermList terms={[
                // TODO: populate with all favourited terms
            ]}/>
        </main>
        </>
    );
}