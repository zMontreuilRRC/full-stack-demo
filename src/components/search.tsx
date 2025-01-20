// Add state to search
// it must be able to track the currently-searched term and the set of term resultspo[2]
export function Search() {
    return(
        <section className="search">
            <h2>What do you want to learn about?</h2>
            <form action="#">
                {/* Note use of closing tags on inputs */}
                <input type="text" name="field-term" 
                    placeholder="Enter a word, phrase, or acronym..." />
                <input type="submit" value="Search" />
            </form>
        </section>
    );
}