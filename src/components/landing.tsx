import { TermCard } from "./term-card";
import { Term } from "../interfaces/term";
import { useEffect, useState } from "react";
import { fetchTerms } from "../services/termService";

export function Landing() {
    // add effect for fetching data
    // use effects rather than state 
    const [favouriteTerms, setFavourites] = useState<Term[]>([]);

    // UseEffect triggers whenever the component is rendered
    useEffect(() => {
        // defining nested function allows async/await syntax
        async function getFavourites() {
            setFavourites([]);
            const result: Term[] = await fetchTerms();
            if(!ignore) { 
                const favourites = result.filter(t => !t.isFavourite);
                setFavourites(favourites);
            }
        }

        // prevents multiple "racing" calls. If multiple requests are made, only the latest is displayed
        let ignore = false;

        getFavourites();

        // cleanup method invoked after useEffect invocation
        return () => {
            ignore = true;
        }
        // dependency array
        // any variables passed to this array that change values will rerun the method
        // empty array prevents re-rendering loop (because state re-renders the element)
    }, []);

    return (
        <>
        <header>
            <h1>Complexicon</h1>
            <span>Make complex terms simple to understand!</span>
        </header>
        <main>
            <section>
                <Search />
            </section>
            <section>
                <h2>My Favourite Terms</h2>
                <ListDisplay terms={favouriteTerms}/>
            </section>
        </main>
        </>
    );
}

function Search() {
    return(
        <form className="search-form" action="#">
            {/* Note use of closing tags on inputs */}
            <input type="text" name="field-term" placeholder="Enter a word, phrase, or acronym..." />
            <input type="submit" value="Search" />
        </form>
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
        <ol className="terms-list">
            {termListItems}
        </ol>
    )
}