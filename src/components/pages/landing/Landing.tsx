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
    
    const [searchLength, setSearchLength] = useState(0);

    const termFilter = (termEle: Term) => {
        if(searchLength != 0) {
            return termEle.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        } else {
            return false;
        }
    }

    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            // we store messages in component state to change how they are displayed
            const validSearch = trySearch().isValid;
            if(validSearch) {
                setSearchLength(searchValue.length);
            } else {
                setSearchLength(0);
            }
        }, 500);

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
                {/* setting search length as a dependency allows us to validate a search 
                while also re-searching if the length of the search changes */}
                <TermListPage
                    title=""
                    termDependencies={[searchLength]}
                    termFilterFn={termFilter}
                />
            </main>
        </>
    );
}