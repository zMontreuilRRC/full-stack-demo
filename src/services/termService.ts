import * as TermRepo from "../apis/termRepo";
import { Term } from "../types/term";

export async function fetchTerms(sessionToken? : string|null) {
    const terms = await TermRepo.fetchTerms(sessionToken);
    return terms;
}

// as business logic (deciding if the term is favourited or not), this function
// belongs in the service layer
export async function toggleFavouriteTerm(termId: number, sessionToken: string) {
    const term: Term = await TermRepo.getTermById(termId, sessionToken);
    if(term.isFavourite) {
        await TermRepo.deleteFavouriteTerm(
            term.id,
            sessionToken
        );
    } else {
        await TermRepo.addFavouriteTerm(
            term.id,
            sessionToken
        );
    }
}