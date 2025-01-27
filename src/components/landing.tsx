import { TermCard } from "./term-card";
import { Term } from "../interfaces/term";
import { useState } from "react";
import { terms as termData } from "../services/terms";

export function Landing() {
    // initial demonstration: two lists that filter down based on state changes
    const [terms] = useState<Term[]>(termData);
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
                    <ListDisplay 
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
                <section>
                    <h2>My Favourite Terms</h2>
                    <ListDisplay 
                        terms={terms.filter(t => t.isFavourite)} 
                    />
                </section>
            </main>
        </>
    );
}

function Search({searchValue, handleSearchChange}
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

// props are passed as a single object, which may be destructured in parameters
function ListDisplay({terms}: {terms: Term[]}) {
    const [expandedId, setExpandedId] = useState<number|null>(null);

    // annotate type as a list of JSX elements
    // map is the best means of creating a component array
    const termListItems: JSX.Element[] = terms.map((term) => {
        return (
            <TermCard
                term={term} 
                isExpanded={term.id === expandedId} 
                onTitleClick={ 
                    () => {
                        term.id !== expandedId ? setExpandedId(term.id) : setExpandedId(null)
                    }
                }
                key={term.id} 
            />
            // all iterated components should have a Key provided
        )
    });

    return(
        <ol className="terms-list">
            {termListItems}
        </ol>
    )
}