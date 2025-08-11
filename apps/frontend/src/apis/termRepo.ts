import { FrontendTerm as Term } from "@shared/types/frontend-term";

type TermsResponseJSON = {message: String, data: Term[]};
type TermResponseJSON = {message: String, data: Term};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const TERM_ENDPOINT = "/terms"

export async function fetchTerms(): Promise<Term[]> {
    // include bearer authorization if the user is signed in and a token is passed to the function
    const termResponse: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}`
    );

    if(!termResponse.ok) {
        throw new Error("Failed to fetch terms");
    }

    const json: TermsResponseJSON = await termResponse.json();
    return json.data;
}

export async function getTermById(termId: number): Promise<Term> {
    const termResponse: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}/${termId}`
    );

    if(!termResponse.ok) {
        throw new Error(`Failed to fetch term with id ${termId}`);
    }

    const json: TermResponseJSON = await termResponse.json();
    return json.data;
}

export async function updateTerm(term: Term) {
    const updateResponse: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}/${term.id}`,
        {
            method: "PUT",
            body: JSON.stringify({...term}),
            headers: {
                ContentType: "application/json",
            }
        }
    );
        
    if(!updateResponse.ok) {
        throw new Error(`Failed to update term with id ${term.id}`);
    }

    const json: TermResponseJSON = await updateResponse.json();
    return json.data;
}

export async function addFavouriteTerm(term: Term) {
    term.isFavourite = true;

    const updateResponse: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}/${term.id}`,
        {
            method: "PUT",
            body: JSON.stringify({...term}),
            headers: {
                ContentType: "application/json",
            }
        }
    );

    const json: TermResponseJSON = await updateResponse.json();
    return json.data;
}

export async function unfavouriteTerm(term: Term) {
    term.isFavourite = false;

    const updateResponse: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}/${term.id}`,
        {
            method: "PUT",
            body: JSON.stringify({...term}),
            headers: {
                ContentType: "application/json",
            }
        }
    );

    const json: TermResponseJSON = await updateResponse.json();
    return json.data;
}