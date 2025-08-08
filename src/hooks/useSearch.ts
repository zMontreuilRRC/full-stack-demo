import { useState } from "react";
import * as searchService from "../services/searchService";

// this hook manages the state of a search component
// it handles both the state of the search, and the accompanying message
export function useSearch() { 
    const [searchValue, setSearchValue] = useState<string>("");

    /**
     * Validity of a search is a business logic concern, so it's handled in a Service
     * @returns validation <bool?: if the search is valid
     *  errors <string[]>: Any error messages raised by an invalid search
     */
    function trySearch(): {isValid: boolean, errors: string[]} {
        const validation = searchService.validateSearch(searchValue);
      
        return validation;
    };

    /**
     * Exposes the searchValue and setSearchValue state variable/method
     * Also exposes method for validating a search.
     */
    return { 
        searchValue, 
        setSearchValue,
        trySearch
    };
}