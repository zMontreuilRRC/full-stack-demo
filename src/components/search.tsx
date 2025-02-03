export function Search({searchValue, handleSearchChange}
    : {
        searchValue: string, 
        handleSearchChange: (newValue: string) => void
    }) {
    return(
        <form className="search-form" action="#">
            {/* Note use of closing tags on inputs */}
            <input type="text" 
                name="field-term" 
                placeholder="Enter a word, phrase, or acronym..." 
                value={searchValue}
                onChange={e => handleSearchChange(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    );
}