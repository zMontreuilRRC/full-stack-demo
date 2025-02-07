import { TermListDisplay} from "./components/common";
import { useState } from "react";
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
            navigate(`/terms/search?value=${searchValue}`)
        }
    }  
    
    const termFilter = (termEle: Term) => {
        return searchValue.trim() !== "" && 
            termEle.title.toLowerCase().includes(searchValue.toLowerCase().trim()
        )
    }

    const { terms, toggleFavouriteTerm } = useTerms(termFilter);
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
                      handleSearchChange={setSearchValue}
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
