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
            <h2>Today's Top Terms</h2>
            <TermList terms={
                [
            // TODO: Populate term list 
                ] 
            }/>
        </main>
        </>
    );
}