import { TermListDisplay} from "./components/common";
import { useEffect, useState } from "react";
import { Search } from "./components/search";
import { Term } from "./interfaces/term";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useTerms } from "./hooks/useTerms";


// functions that return JSX are React Components
// files must have .tsx extension
function App() {
    const [searchValue, setSearchValue] = useState<string>("");
    const navigate = useNavigate(); 
    const doSearch = () => {
        if(searchValue.trim()) {
            setSearchValue("");
            navigate(`/terms/search?value=${searchValue}`);
        }
    }  
    
    const termFilter = (termEle: Term) => {
        if(searchValue.trim()) {
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
    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            if(searchValue.trim()) {
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
                  <Search  
                      searchValue={searchValue}
                      handleSearchChange={e => {
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
