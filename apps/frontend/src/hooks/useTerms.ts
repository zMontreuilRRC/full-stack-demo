import { useEffect, useState } from "react";
import { FrontendTerm as Term } from "@shared/types/frontend-term";
import * as TermService from "../services/termService";

// filter function can be passed in as callback to filter down resulting terms
// dependencies may be passed in to force re-query
export function useTerms(
    dependencies: any[] = [],
    filterFn? : ((term: Term) => Boolean)|null,
) {
    const [terms, updateTerms] = useState<Term[]>([]);
    const [error, setError] = useState<string | null>();

    const fetchTerms = async() => {
        try {
            let result = await TermService.fetchTerms();
            if(filterFn) {
                result = result.filter(filterFn);
            }

            // this spread of the newly created result is necessary in order to correctly
            // re-render a component not passed a filter function...why?
            updateTerms([...result]);
        } catch(errorObject) {
            setError(`${errorObject}`);
        }
    }

    const toggleFavouriteTerm = async(id: number) => {
        try {
            const term: Term = await TermService.getTermById(id)
            term.isFavourite = !term.isFavourite;
            await TermService.updateTerm(term);

            // re-query after updating
            await fetchTerms();
        } catch(errorObject) {
            setError(`${errorObject}`);
        }   
    }

    // useEffect only needs to be used when first getting terms. It doesn't need favouriteTerms as
    // a dependency since modifying a term can just manually update state
    // note: useEffect triggers multiple times when in Strict Mode
    // Added optional dependencies so that these may be passed to the effect if needed
    useEffect(() => {
        fetchTerms();
    }, [...dependencies]);

    return { terms, error, updateTerms, fetchTerms, toggleFavouriteTerm };
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