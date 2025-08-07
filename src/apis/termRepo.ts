import { Term } from "../types/term";
import { termData } from "./mockTermData";

// currently we use a mock database to simulate the existence of the backend
// when we implement the backend we will replace these methods with calls to an API

// Get all terms
export function fetchTerms(): Term[] {
    return termData;
}


export function getTermById(termId: number): Term {
    const foundTerm = termData.find(t => t.id === termId);

    if(!foundTerm) {
        throw new Error(`Failed to fetch term with ${termId}`);
    }

    return foundTerm;
}

export async function updateTerm(term: Term) {
    const foundTermIndex = termData.findIndex(t => t.id === term.id);

    if(foundTermIndex === -1) {
        throw new Error(`Failed to update term with ${term.id}`);
    }

    termData[foundTermIndex] = term;
    return termData[foundTermIndex];
}

export async function addFavouriteTerm(
    termId: number,
) {
    const foundTerm = termData.find(t => t.id === termId);

    if(!foundTerm) {
        throw new Error(`Failed to fetch term with ${termId}`);
    } else {
        foundTerm.isFavourite = true;
    }

    return foundTerm;
}

export async function deleteFavouriteTerm(
    termId: number,
) {
    const foundTerm = termData.find(t => t.id === termId);

    if(!foundTerm) {
        throw new Error(`Failed to fetch term with ${termId}`);
    } else {
        foundTerm.isFavourite = true;
    }

    return foundTerm;
}