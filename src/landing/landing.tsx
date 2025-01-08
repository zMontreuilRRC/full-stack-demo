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
            <ListDisplay terms={testTerms}/>
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
function ListDisplay({terms}: {terms: string[]}) {
    // annotate type as a list of JSX elements
    const termListItems: JSX.Element[] = [];

    terms.forEach((term) => {
        termListItems.push(<li>
            <a href="#">{term}</a>
        </li>);
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