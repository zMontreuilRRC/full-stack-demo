import { NavLink, useNavigate } from "react-router";
import { Search } from "./search";
import { useState } from "react";

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
                <span>
                    <a href="#">Log In</a>
                </span>
            </div>
            <Search
                searchValue={searchValue}
                handleSearchChange={setSearchValue}
                handleSubmit={doSearch}
            />
        </nav>
    );
}