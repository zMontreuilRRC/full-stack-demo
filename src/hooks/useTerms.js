/**
 * We have a problem: terms need to be able to save their changes (i.e. being
 * saved for the user) but they also need to be able to update the state
 * of the component using them.
 * 
 * Rather than re-writing handlers for different pages, a custom hook will allow
 * us to update state, and terms, in real time regularly.
 */
import Term from "../interfaces/term";

export function useTerms() {
    const [terms, updateTerms] = useState<Term>([]);

}