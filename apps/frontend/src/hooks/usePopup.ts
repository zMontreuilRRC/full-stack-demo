import { useRef, useState } from "react";

export function usePopup():
    {
        popupVisible: boolean;
        popupText: string;
        showPopupWithText: (displayText: string) => void;
    } {
    const [popupVisible, setVisible] = useState<boolean>(false)
    const [popupText, setText] = useState<string>("");
    const timeoutRef = useRef<number | null>(null); 

    const showPopupWithText = (displayText: string) => {
        setText(displayText);
        setVisible(true);

        // useRef allows storage of mutable values across renders
        // in this case track timeout reference id
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setVisible(false);
        }, 3000);
    }
    
    return {popupVisible, popupText, showPopupWithText};
}