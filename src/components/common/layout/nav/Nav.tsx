import { NavLink } from "react-router";

export function Nav() {
    return(
        <nav>
            <div className="page-links">
                {/* Create an <a> tag that routes to the provided string value */}
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/terms">
                    All Terms
                </NavLink>
                <NavLink to="/terms/my-terms">
                    My Terms
                </NavLink>
                <NavLink to="/mod-2-examples/buttons">
                    State "Button" Example
                </NavLink>
                <NavLink to="/mod-2-examples/list">
                    State "List" Example
                </NavLink>
            </div>
            <div className="user-management-links">
                <span>
                    <a href="#">Log In</a>
                </span>
            </div>
        </nav>
    );
}