import { useState } from "react";
import * as searchService from "../services/searchService";

// this hook manages the state of a search component
// it handles both the state of the search, and the accompanying message
// it also sends the search value to the search service for validation
export function useSearch() { 
    const [searchMessages, setSearchMessages] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [searching, setSearching] = useState<boolean>(false);

    function trySearch() {
        const validation = searchService.validateSearch(searchValue);
        
        setSearchMessages(validation.errors);
        setSearching(validation.isValid);
    };

    return { 
        searchMessages,
        searchValue, 
        setSearchValue,
        trySearch,
        searching
    };
}