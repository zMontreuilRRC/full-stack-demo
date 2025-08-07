import { NavLink, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { SearchBar } from "../../common/search-bar/SearchBar";

export function Nav() {
    const { 
        searchValue, 
        setSearchValue,
        trySearch,
    } = useSearch();

    const [searchMessages, setSearchMessages] = useState<string[]>([]);
    const navigate = useNavigate();
    const location = useLocation();

    // the navbar, unlike the main page, will navigate on a succesful search. We extracted this from the search component so we could change behaviour in different parent components
    const doSearch = () => {
        const validation = trySearch();
        if(validation.isValid) {
            navigate(`/terms/search?value=${searchValue}`);
            setSearchMessages([]);
            setSearchValue("");
        } else {
            setSearchMessages(validation.errors);
        }
    }

    // this effect will reset the error message and search value if we navigate at any point
    useEffect(() => {
        setSearchValue("");
        setSearchMessages([]);
    }, [location]);

    return(
        <nav>
            <div className="page-links">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/terms">
                    All Terms
                </NavLink>
                <NavLink to="/terms/my-terms">
                    My Terms
                </NavLink>
            </div>
            <SearchBar
                searchValue={searchValue}
                messages={searchMessages}
                handleSearchChange={setSearchValue}
                handleSubmit={doSearch}
            />
        </nav>
    );
}