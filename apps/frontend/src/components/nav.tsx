import { NavLink, useNavigate } from "react-router";
import { SearchBar } from "./search-bar/SearchBar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useSearch } from "../hooks/useSearch";


export function Nav() {
    const { 
        searchMessages,
        searchValue, 
        setSearchValue,
        trySearch,
        searching
    } = useSearch();
    const navigate = useNavigate();

    // the navbar, unlike the main page, will navigate on a succesful search. We extracted this from the search component so we could change behaviour in different parent components
    const doSearch = () => {
        trySearch();
        if(searching) {
            navigate(`/terms/search?value=${searchValue}`);
            setSearchValue("");
        }
    }

    return(
        <nav>
            <div className="page-links">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/terms">
                    All Terms
                </NavLink>
                <SignedIn>
                    <NavLink to="/terms/my-terms">
                        My Terms
                    </NavLink>
                </SignedIn>
            </div>
            <div className="user-management-links">
                {/* clerk-provided components */}
                <SignedOut>
                    {/* renders when user is signed out */}
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    {/* renders when user is signed in */}
                    <UserButton />
                </SignedIn>
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