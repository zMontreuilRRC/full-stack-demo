import { useEffect, useState } from "react";
import * as TermService from "../services/termService";
import { Term } from "../types/term";

/**
 * This is a custom hook, which is defined when we want to reuse presentation
 * logic. They are often built around specific groups of data or behaviour.
 * 
 * You can think of this hook as an extra layer of functionality that we've 
 * added to a State that is an array of Terms[].
 * 
 * Hooks typically return an object that holds functions and variables for 
 * reading and interacting with a state or set of states.
 * 
 * @param dependencies: any variables that, when changed, should re-query 
 *  ("refresh") our list of terms by getting all terms from our Service
 * @param filterFn: a filter callback function. 
 *  If a term argument returns "true", it is included in the stored state of terms.
 * @returns {
 *  terms: the array of terms (that return "true" for the filter function) 
 *  error: any error message that is raised 
 *  toggleFavouriteTerm: method that toggles the "favourite" property of a term
 * }
 */
export function useTerms(
    dependencies: unknown[],
    filterFn? : ((term: Term) => boolean)|null,
) {
    // extract methods from useAuth() clerk method
    const [terms, updateTerms] = useState<Term[]>([]);
    const [error, setError] = useState<string | null>();

    /**
     * Get the TermService to fetch all terms and store them in state.
     */
    const fetchTerms = async() => {
        try {
            let result = await TermService.fetchTerms();

            /** 
             * If there is a filterFn argument for the hook, then only store terms
             * that return "true" for that function.
             */
            if(filterFn) {
                result = result.filter(filterFn);
            }

            // map the resulting array onto the state
            updateTerms([...result]);
        } catch(errorObject) {
            // set the error state to the error object if an error is caught
            setError(`${errorObject}`);
        }
    }

    /**
     * Switch the "isFavourite" value of a term with a specified id
     * @param termId: the ID of the term 
     */
    const toggleFavouriteTerm = async(termId: number) => {
        try {
            await TermService.toggleFavouriteTerm(termId);

            // re-fetch terms to update our state once the operation is finished
            await fetchTerms();
        } catch(errorObject) {
            setError(`${errorObject}`);
        }   
    }

    useEffect(() => {
        fetchTerms();
    }, [...dependencies]);

    /**
     * Not all return object properties have to be used; notice how TermListPage
     * only uses "terms", "error", and "toggleFavouriteTerm".
     * Note that we can use custom hooks to limit how components can interact with a state.
     */
    return { 
        terms, 
        error, 
        toggleFavouriteTerm 
    };
}

/** NOTES **
 * We have a problem: terms need to be able to save their changes (i.e. being
 * saved for the user) but they also need to be able to update the state
 * of the component using them.
 * 
 * Rather than re-writing handlers for different pages, a custom hook will allow
 * us to update state, and terms, in real time regularly.
 * 
 * USEEFFECT will invoke the moment a component is rendered. 
 * The second array will list dependencies of the effect, that is, all "reacting" 
 * elements that the effect handles. useEffect will only invoke on the INITIAL rendering
 * of a component -- it well then only re-invoke if a DEPENDENCY value changes.'
 * 
 */