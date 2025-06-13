// as a service, validateSearch handles the business logic of searches.
// It determines if a search is valid, in this case, of a certain length
export function validateSearch(searchValue: string):
    {
        isValid: boolean;
        errors: string[];
    } {
        let isValid = true;
        let errors: string[] = [];
        if(searchValue.trim.length < 1) {
            isValid = false;
            errors.push("Cannot search for fewer than two characters.");
        }

    return {isValid, errors};
}