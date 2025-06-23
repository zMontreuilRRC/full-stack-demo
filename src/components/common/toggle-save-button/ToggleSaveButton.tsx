import { CheckmarkIcon } from "../../../assets/checkmark-icon";
import { DiskIcon } from "../../../assets/disk-pen-svgrepo-com";

function ToggleSaveButton({onClick, isSaved} : {
    onClick: () => void, 
    isSaved: boolean}) 
{
    return(
        <button onClick={onClick}>
            {isSaved ? <CheckmarkIcon /> : <DiskIcon />}
        </button>
    );
}

export default ToggleSaveButton;