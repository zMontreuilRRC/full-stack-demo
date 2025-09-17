import { NavLink, useLocation, useNavigate } from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
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

    // the navbar, unlike the main page, will navigate on a succesful search.
    //  We extracted this from the search component so we could change behaviour in different parent components
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
                {/* only displayed when the user is signed in */}
                <SignedIn>
                    <NavLink to="/terms/my-terms">
                        My Terms
                    </NavLink>
                </SignedIn>
            </div>
            {/* Components receive sign-in state from ClerkProvider in <main> */}
            <div className="user-management-links">
                {/* clerk-provided components */}
                <SignedOut>
                    {/* renders when user is signed out. Directs to clerk-provided sign-in page */}
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