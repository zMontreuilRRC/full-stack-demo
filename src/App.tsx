import { TermListDisplay} from "./components/common";
import { useState } from "react";
import { Search } from "./components/search";
import { Term } from "./interfaces/term";
import { terms as termData } from "./services/terms";
import { useNavigate } from "react-router-dom";
import "./App.css";


// functions that return JSX are React Components
// files must have .tsx extension
function App() {
  const [terms] = useState<Term[]>(termData);
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate(); 

  const doSearch = () => {
    if(searchValue.trim()) {
        navigate(`/terms/search?value=${searchValue}`)
    }
  }  

  return (
      <>
          <header>
              <h1>Complexicon</h1>
              <span>Make complex terms simple to understand!</span>
          </header>
          <main>
              <section>
                  {/* invoking setSearchValue updates the state of the search */}
                  <Search  
                      searchValue={searchValue}
                      handleSearchChange={setSearchValue}
                      handleSubmit={doSearch}
                  />
                  <TermListDisplay 
                      terms= {
                          searchValue.trim() 
                          ? terms.filter(t => {
                                  return t.title.toLowerCase().includes(
                                      searchValue.toLowerCase().trim()
                              )}
                          )
                          : []
                      }
                  />
              </section>
          </main>
      </>
  );
}

// export component for use in main.tsx
export default App
