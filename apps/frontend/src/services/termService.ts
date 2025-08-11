import * as TermRepo from "../apis/termRepo";
import { FrontendTerm as Term } from "@shared/types/frontend-term";

export async function fetchTerms() {
    const terms = await TermRepo.fetchTerms();
    return terms;
}

// as business logic (deciding if the term is favourited or not), this function
// belongs in the service layer
export async function toggleFavouriteTerm(termId: number) {
    const term: Term = await TermRepo.getTermById(termId);
    if(term.isFavourite) {
        // await TermRepo.deleteFavouriteTerm(
        //     term.id,
        // );
    } else {
        // await TermRepo.addFavouriteTerm(
        //     term.id,
        // );
    }
}