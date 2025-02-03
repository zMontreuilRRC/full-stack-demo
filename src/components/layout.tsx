import { Outlet } from "react-router-dom";
import { Nav } from "./nav";
import { Footer } from "./common";

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