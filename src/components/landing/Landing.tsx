const testTerms = ["SEO", "IDE", "Big O Notation", "Encapsulation", "Repository"];
// TSX files can be written like any other TS file, but can include JSX Elements

// this function returns a JSX element, so it is a Component
export function Landing() {
    // Components can only return one JSX element, but that element can have many children
    // This anonymous element has a <header> and <main> as children
    return (
        <>
            {/* JSX can render plain HTML */}
            <header>
                <h1>Complexicon</h1>
                <span>Make complex terms simple to understand!</span>
            </header>
            <main>
                {/* It can also render other components */}
                <Search />
                
                {/* And it can include TS logic inside curly braces, like these comments are!
                
                Note that testTerms is a TS constant defined above, so we pass in an array as this component's property value*/}
                <ListDisplay terms={testTerms}/>
            </main>
        </>
    );
}

// TODO: Implement Search Functionality
// This is only rendered in Landing (in the same file), so it doesn't need to be exported
function Search() {
    // Note how it just returns some HTML, so it renders like any other HTML element
    // This returns a single <section> element
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

// This function returns a JSX element so it is a component
// Components can have "props" as parameters
// Compare to how "terms" are passed to this component in the Landing (like how HTML elements get properties)
// Props are always packed into an object, so are destructured out (note the {terms} curly braces)
function ListDisplay({terms}: {terms: string[]}) {
    // annotate type as a list of JSX elements
    const termListItems: JSX.Element[] = [];

    // Here we iterate over the terms received as an argument
    // We add a new JSX element to termListItems for each term string in the array
    terms.forEach((term, index) => {
        // when creating elements in an array, they should always have a "key" prop
        termListItems.push(<ListTermItem
                term={term}
                key={index}
            />
        );
    })
 
    // we create the list of elements, then render it in the component JSX:
    return(
        <section className="top-terms">
            <h2>Today's Top Terms:</h2>
            <ol className="top-terms__list">
                {/* evaluates down to the list of elements: */}
                {termListItems}
            </ol>
        </section>
    )
}

// This simple component lets us repeatedly render <li> elements with <a> tags inside, with the {term} prop as its content.
function ListTermItem({term}: {term: string}) {
    return (
        <li>
            <a href="#">{term}</a>
        </li>
    )
}

export default Landing;