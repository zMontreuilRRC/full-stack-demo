import { Term } from "../types/term";
import { termData } from "./mockTermData";

/**
 * Repository methods are made to send requests to external services, such
 * as APIs and the application backend. 
 * 
 * These are often separated in terms of what resource they access. 
 * They are often built with a set of basic CRUD methods for specific resources.
 * 
 * For now we are just accessing Terms, but our repo will eventually split into 
 * two: one for Terms, and one for TermUsers (the relationship between terms
 * and individual users.)
 */

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
        foundTerm.isFavourite = false;
    }

    return foundTerm;
}