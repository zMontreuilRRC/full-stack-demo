import { useState } from "react";
import * as searchService from "../services/searchService";

// this hook manages the state of a search component (but not the "live" search at the Landing)
// it handles both the state of the search, and the accompanying message
// it also sends the search value to the search service for validation
export function useSearch() { 
    const [searchValue, setSearchValue] = useState<string>("");

    function trySearch(): {isValid: boolean, errors: string[]} {
        const validation = searchService.validateSearch(searchValue);
        
        return validation;
    };

    return { 
        searchValue, 
        setSearchValue,
        trySearch
    };
}