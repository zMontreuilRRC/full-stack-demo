import { useState } from "react";
import { Term } from "../../types/term";
import { Search } from "../common/search/Search";
import { TermListDisplay } from "../common/term-list-display/TermListDisplay";

function Landing({terms}: {terms: Term[]}) {
    // TODO: Add TermData as Context for all pages, App
    const [searchValue, setSearchValue] = useState<string>("");

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

export default Landing;