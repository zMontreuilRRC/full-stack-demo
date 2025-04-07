import { NavLink, useNavigate } from "react-router";
import { Search } from "./search";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export function Nav() {
    const [searchValue, setSearchValue] = useState<string>("");
    const navigate = useNavigate();

    const doSearch = () => {
        if(searchValue.trim()) {
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
                <NavLink to="/terms/my-terms">
                    My Terms
                </NavLink>
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
            <Search
                searchValue={searchValue}
                handleSearchChange={setSearchValue}
                handleSubmit={doSearch}
            />
        </nav>
    );
}