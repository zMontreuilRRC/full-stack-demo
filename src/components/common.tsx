import { CheckmarkIcon } from "../assets/checkmark-icon";
import { DiskIcon } from "../assets/disk-pen-svgrepo-com";

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

export function ToggleSaveButton({onClick, isSaved} : {
    onClick: () => void, 
    isSaved: boolean}) 
{
    return(
        <button onClick={onClick}>
            {isSaved ? <CheckmarkIcon /> : <DiskIcon />}
        </button>
    );
}
