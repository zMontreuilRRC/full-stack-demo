import { Outlet, useNavigate } from "react-router-dom";
import { Nav } from "./nav";
import { Footer } from "./common";
import { Search } from "./search";
import { useState } from "react";

// outlet component has pages injected dynamically
export function Layout() {
    const [searchValue, setSearchValue] = useState<string>("");
    const navigate = useNavigate();

    const doSearch = () => {
        if(searchValue.trim()) {
            navigate(`/terms/search?value=${searchValue}`)
        }
      }  

    return(
        <>
            <Nav />
            <Search
                searchValue={searchValue}
                handleSearchChange={e => setSearchValue(e)}
                handleSubmit={doSearch}
            />
            <Outlet />
            <Footer />
        </>
    )
}