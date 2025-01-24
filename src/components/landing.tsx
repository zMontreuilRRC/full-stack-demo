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
                    {
                        "id": 0,
                        "title": "SEO (Search Engine Optimization)",
                        "definition": "The process of making a website more visible in search results, also termed improving search rankings.",
                        "isFavourite": false
                    },
                    {
                        "id": 1,
                        "title": "API (Application Programming Interface)",
                        "definition": "A set of functions and protocols that allows the creation of applications that access features or data of an operating system, application, or service.",
                        "isFavourite": false
                    }
                ] 
            }/>
        </main>
        </>
    );
}