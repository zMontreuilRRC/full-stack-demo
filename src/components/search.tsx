export function Search({searchValue, handleSearchChange, handleSubmit}
    : {
        searchValue: string, 
        handleSearchChange: (newValue: string) => void,
        handleSubmit: () => void
    }) {
    return(
        <form className="search-form">
            {/* Note use of closing tags on inputs */}
            <input type="text" 
                name="field-term" 
                placeholder="Enter a word, phrase, or acronym..." 
                value={searchValue}
                onChange={e => handleSearchChange(e.target.value)}
            />
            <button onClick={e => {
                e.preventDefault();
                 handleSubmit()
                }}>
                    Search
            </button>
        </form>
    );
}