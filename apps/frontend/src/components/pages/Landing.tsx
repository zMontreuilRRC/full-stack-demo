import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { FrontendTerm as Term } from "@shared/types/frontend-term";
import { TermListPage } from "./TermListPage";
import { SearchBar } from "../common/search-bar/SearchBar";

export function Landing() {
    const {
        searchValue,
        setSearchValue,
        trySearch
    } = useSearch();

    const [searchMessages, setSearchMessages] = useState<string[]>([]);
    
    let [searchLength, setSearchLength] = useState(0);
    // filter terms on the page based on the current searchbar value

    const termFilter = (termEle: Term) => {
        if(searchLength != 0) {
            return termEle.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        } else {
            return false;
        }
    }

    // this is used to initially attach the debounce to the fetchTerms call
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
            <main>
                <section>
                    <SearchBar  
                        searchValue={searchValue}
                        messages={searchMessages}
                        handleSearchChange={e => {
                            setSearchMessages([]);
                            setSearchValue(e);
                        }}
                        handleSubmit={() => {}}
                    /> 
                </section>  
                {/* setting search length as a dependency allows us to validate a search 
                while also re-searching if the length of the search changes */}
                <TermListPage
                    title=""
                    dependencies={[searchLength]}
                    filterFn={termFilter}
                />
            </main>
        </>
    );
}