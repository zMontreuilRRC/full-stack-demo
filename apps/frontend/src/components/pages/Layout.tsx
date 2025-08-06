import { Outlet } from "react-router-dom";
import { Nav } from "../common/nav";
import { Footer } from "../common/common";

// outlet component has pages injected dynamically
export function Layout() {
    return(
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}