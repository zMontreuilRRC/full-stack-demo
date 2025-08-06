import "./SearchBar.css"

/**
 * This is an example of where organization can be a bit tricky.
 * We may expect the useSearch() hook to be imported here,
 * but the parent components of the SearchBar need to know the state
 * that it uses. Therefore we pass the handler and state down to this
 * component instead of defining it here.
 */
export function SearchBar({searchValue, messages, handleSearchChange, handleSubmit}
    : {
        searchValue: string, 
        messages: string[],
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
            { messages?.map((message, index) => 
                <div 
                    className="error"
                    key={index}
                >
                    {message}
                </div>
            )}
            <button onClick={e => {
                e.preventDefault();
                 handleSubmit()
                }}>
                    Search
            </button>
        </form>
    );
}