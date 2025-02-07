import { useEffect, useState } from "react";
import { Term } from "../interfaces/term";
import * as TermService from "../services/termService";

export function useTerms(filterFn? : (term: Term) => Boolean) {
    const [terms, updateTerms] = useState<Term[]>([]);

    const fetchTerms = async() => {
        try {
            let result = await TermService.fetchTerms();

            if(filterFn) {
                result = result.filter(filterFn);
            }

            updateTerms(result);
        } catch(errorObject) {
            // display error
        }
    }

    const toggleFavouriteTerm = async(id: number) => {
        try {
            // **TODO**: should show error if unsuccesful
            await TermService.toggleTermSave(id);

            // re-query after updating
            const terms = await TermService.fetchTerms();
            updateTerms(terms);
        } catch(errorObject) {

        }
    }

    // useEffect only needs to be used when first getting terms. It doesn't need favouriteTerms as
    // a dependency since modifying a term can just manually update state
    useEffect(() => {
        console.log("effect");
        fetchTerms();
    }, []);

    return { terms, toggleFavouriteTerm };
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
 * of a component -- it well then only re-invoke if a DEPENDENCY value changes.
 */