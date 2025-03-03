import { useEffect } from "react"

export default function PopupMessage({message}: {message: string}) {
    useEffect(() => {
        
    }, [])

    return (
        <div className="popup-message">
            <p>{message}</p>
        </div>
    )
}