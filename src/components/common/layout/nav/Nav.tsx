import { NavLink } from "react-router";

export function Nav() {
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
        </nav>
    );
}