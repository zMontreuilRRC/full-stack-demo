import { Outlet } from "react-router-dom";
import { Nav } from "./nav/Nav";
import Footer from "./footer/Footer";

/**
 * This renders the general page structure -- the nav, footer, and the Outlet (page) within.
 * When we navigate to other children of this route (e.g. any, since it's rendered at the root "/")
 * it will render those route components in the <Outlet>.
 */
export function Layout() {
    return(
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}