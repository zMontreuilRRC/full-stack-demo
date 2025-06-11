import "./common.css"

export function Footer() {
    return(<footer>
        Complexicon &#169; Me, 2025
    </footer>);
}

export function Nav() {
    return(<nav>
         <div className="page-links">
            <span>
                <a href="#">Home</a>
            </span>
            <span>
                <a href="#">Top Terms</a>
            </span>
            <span>
                <a href="#">My Terms</a>
            </span>
            <span>
                <a href="#">My Contexts</a>
            </span>
        </div>
        <div className="user-management-links">
            <span>
                <a href="#">Log In</a>
            </span>
        </div>
    </nav>);
}