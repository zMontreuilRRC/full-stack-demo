import { TermCard } from "../common/term-card";
import { Term } from "../interfaces/term";

const testTerms = ["SEO", "IDE", "Big O Notation", "Encapsulation", "Repository"];

export function Landing() {
    return (
        <>
        <header>
            <h1>Complexicon</h1>
            <span>Make complex terms simple to understand!</span>
        </header>
        <main>
            <Search />
            <ListDisplay terms={
                [{
                    id: 0,
                    title: "test title",
                    definition: "test def",
                    isFavourite: false
                }] 
            }/>
        </main>
        </>
    );
}

function Search() {
    return(
        <section className="search">
            <h2>What do you want to learn about?</h2>
            <form action="#">
                {/* Note use of closing tags on inputs */}
                <input type="text" name="field-term" placeholder="Enter a word, phrase, or acronym..." />
                <input type="submit" value="Search" />
            </form>
        </section>
    );
}

// props are passed as a single object, which may be destructured in parameters
function ListDisplay({terms}: {terms: Term[]}) {
    // annotate type as a list of JSX elements
    const termListItems: JSX.Element[] = [];

    // iterative components must always receive a key prop
    terms.forEach((term, index) => {
        // clicking on the term will expand it and close all others
        termListItems.push(
            <TermCard term={term} 
                isExpanded={true} 
                onTitleClick={() => null}
                key={index}
            />
        );
    })

    return(
        <section className="top-terms">
            <h2>Today's Top Terms:</h2>
            <ol className="top-terms__list">
                {termListItems}
            </ol>
        </section>
    )
}