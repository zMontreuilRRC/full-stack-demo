import * as TermRepo from "../apis/termRepo";
import * as TermFavouriteRepo from "../apis/termFavouriteRepo";
import { FrontendTerm as Term } from "@shared/types/frontend-term";

// use the currently logged in user's session token to request terms
// 
export async function fetchTerms(sessionToken? : string|null) {
    const terms = await TermRepo.fetchTerms(sessionToken);
    return terms;
}

// as business logic (deciding if the term is favourited or not), this function
// belongs in the service layer
export async function toggleFavouriteTerm(termId: number, sessionToken: string) {
    const term: Term = await TermRepo.getTermById(termId, sessionToken);
    if(term.isFavourite) {
        await TermFavouriteRepo.deleteFavouriteTerm(
            term.id,
            sessionToken
        );
    } else {
        await TermFavouriteRepo.addFavouriteTerm(
            term.id,
            sessionToken
        );
    }
}