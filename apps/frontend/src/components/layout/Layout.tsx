import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Nav } from "./nav/Nav";

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