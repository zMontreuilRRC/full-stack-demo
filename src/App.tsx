import { TermListDisplay} from "./components/common";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/search-bar/SearchBar";
import { Term } from  "./types/term";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useTerms } from "./hooks/useTerms";
import { useSearch } from "./hooks/useSearch";

// functions that return JSX are React Components
// files must have .tsx extension
function App() {
    const {
        searchValue,
        setSearchValue,
        trySearch,
    } = useSearch();

    const [searchMessages, setSearchMessages] = useState<string[]>([]);

    const navigate = useNavigate(); 
    const doSearch = () => {
        const validate = trySearch();
        if(validate.isValid) {
            setSearchValue("");
            navigate(`/terms/search?value=${searchValue}`);
        } else {
            setSearchMessages(validate.errors);
        }
    }  
    
    // filter terms on the page based on the current searchbar value
    const termFilter = (termEle: Term) => {
        const validSearch = trySearch().isValid;
        if(validSearch) {
            return termEle.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        } else {
            return false;
        }
    }
    
    // normally we would add in the search value as the dependency but we use the effect
    // to attach the debounce instead
    // TODO: decorate this behaviour onto a term list page?
    const { 
        terms, 
        fetchTerms, 
        toggleFavouriteTerm, 
        updateTerms
    } = useTerms([], termFilter);

    // this is used to initially attach the debounce to the fetchTerms call
    // This logic is exclusive to how this component behaves, but we may want to extract it into a hook later if reused
    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            // we store messages in component state to change how they are displayed
            const validSearch = trySearch();
            if(validSearch) {
                fetchTerms();
            } else {
                updateTerms([]);
            }
        }, 500);

        return () => clearTimeout(debounceSearch);
    }, [searchValue]);

    return (
      <>
          <header>
              <h1>Complexicon</h1>
              <span>Make complex terms simple to understand!</span>
          </header>
          <main>
              <section className="search-and-list">
                  {/* invoking setSearchValue updates the state of the search */}
                  <SearchBar  
                      searchValue={searchValue}
                      messages={searchMessages}
                      handleSearchChange={e => {
                        setSearchMessages([]);
                        setSearchValue(e);
                      }}
                      handleSubmit={doSearch}
                  />
                  <TermListDisplay 
                      terms={terms}
                      onSaveClick={toggleFavouriteTerm}
                  />
              </section>
          </main>
      </>
  );
}

// export component for use in main.tsx
export default App
