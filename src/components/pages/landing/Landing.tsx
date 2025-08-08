import { useState, useEffect } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { Term } from "../../../types/term";
import { SearchBar } from "../../common/search-bar/SearchBar";
import { TermListPage } from "../term-list-page/TermListPage";
import "./landing.css";

export function Landing() {
    const {
        searchValue,
        setSearchValue,
        trySearch
    } = useSearch();
    
    /**
     * This state is used to determine if, once the debounce wait has finished,
     * the length of the search has changed.
     */
    const [searchLength, setSearchLength] = useState(0);

    /**
     * Callback function used to map over terms. Terms must return true to be included.
     * Note: this particular implementation relies on the debounce implemented in "useEffect" below.
     * It waits for changes in the `searchLength` state, which only updates after a set amount of time.
     */
    const termFilter = (termEle: Term) => {
        if(searchLength != 0) {
            return termEle.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        } else {
            return false;
        }
    }

    /**
     * useEffect is a React hook that invokes its callback when its defining component loads.
     * Its parameters are the callback that will run, and an array of dependencies.
     * 
     * An effect will re-invoke its callback if any values listed as dependencies change.
     */
    useEffect(() => {
        // Setup function: callback that defines debounceSearch
        const debounceSearch = setTimeout(() => {
            // we store messages in component state to change how they are displayed
            const validSearch = trySearch().isValid;
            if(validSearch) {
                setSearchLength(searchValue.length);
            } else {
                setSearchLength(0);
            }
        }, 500);
        /**
         *  setup function returns a "cleanup function."
         *  cleanup runs whenever a dependency value changes, and calls setup again.
         *  Also runs when component that called the effect "unmounts"
         */ 
        return () => clearTimeout(debounceSearch);
    }, [searchValue]);

    return(
        <>
            <header>
                <h1>Complexicon</h1>
                <span>Make complex terms simple to understand!</span>
            </header>
            <main className="page-landing">
                <section>
                    {/* 
                        Render the main search bar on the page.
                        As a "controlled" component, it gets its text value from searchValue.
                        When the user types into the field, it invokes handleSearchChange with the new value.
                        It will not display any messages if a search is invalid, only empty results.
                        It also has no "submission" logic.
                        When the value in the searchbar changes, it updates the state of the Landing component.
                    */}
                    <SearchBar  
                        searchValue={searchValue}
                        messages={[]}
                        handleSearchChange={e => {
                            setSearchValue(e);
                        }}
                        handleSubmit={() => {}}
                    /> 
                </section>  
                {/* 
                    searchLength will only change once a search is determined as valid
                    and the debounce wait is over. 

                    If the searchLength changes, because it is an effect dependency, the 
                    useTerms effect reruns its setup method, fetching all terms.

                    Since our filter has updated with the change of searchValue state,
                    it will fetch all terms using the updated filter method.
                */}
                <TermListPage
                    title=""
                    termDependencies={[searchLength]}
                    termFilterFn={termFilter}
                />
            </main>
        </>
    );
}