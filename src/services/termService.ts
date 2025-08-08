import * as TermRepo from "../apis/termRepo";
import { Term } from "../types/term";

/**
 * These Service functions handle the business logic of our application.
 * In some cases that is a straightforward delegation to a repo, but in others
 * it involves making a decision about how to invoke a repository.
 */

/**
 * A straightforward request to get all terms from the repository.
 * @returns Promise<Term[]>: an array of terms
 */
export async function fetchTerms() {
    const terms = await TermRepo.fetchTerms();
    return terms;
}

/**
 * Function decides which repo function to invoke based on if the queried term
 * is a "favourite" or not. 
 * This is an example of business logic by determining that a term can only be
 * a "favourite" or not. 
 * @param termId: the id of the term to be "toggled"
 */
export async function toggleFavouriteTerm(termId: number) {
    const term: Term = await TermRepo.getTermById(termId);
    if(term.isFavourite) {
        await TermRepo.deleteFavouriteTerm(
            term.id,
        );
    } else {
        await TermRepo.addFavouriteTerm(
            term.id,
        );
    }
}