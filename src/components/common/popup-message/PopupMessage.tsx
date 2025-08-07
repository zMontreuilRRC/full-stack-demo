export default function PopupMessage({message}: {message: string}) {
    return (
        <div className="popup-message">
            <p>{message}</p>
        </div>
    )
}