import { FrontendTerm as Term } from "@shared/types/frontend-term";

type TermsResponseJSON = {message: String, data: Term[]};
type TermResponseJSON = {message: String, data: Term};

const BASE_URL = "/api";
const TERM_ENDPOINT = "/v1/terms"

export async function fetchTerms(): Promise<Term[]> {
    const termResponse: Response = await fetch(`${BASE_URL}${TERM_ENDPOINT}`);

    if(!termResponse.ok) {
        throw new Error("Failed to fetch terms");
    }

    const json: TermsResponseJSON = await termResponse.json();
    return json.data;
}


export async function getTermById(termId: number): Promise<Term> {
    const termResponse: Response = await fetch(`${BASE_URL}${TERM_ENDPOINT}/${termId}`);

    if(!termResponse.ok) {
        throw new Error(`Failed to fetch term with id ${termId}`);
    }

    const json: TermResponseJSON = await termResponse.json();
    return json.data;
}

export async function updateTerm(term: Term) {
    const headers:Headers = new Headers();
    headers.append("Content-Type", "application/json");

    const updateResponse: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}/${term.id}`,
        {
            method: "PUT",
            body: JSON.stringify({...term}),
            headers: headers
        }
    );
        
    if(!updateResponse.ok) {
        throw new Error(`Failed to update term with id ${term.id}`);
    }

    const json: TermResponseJSON = await updateResponse.json();
    return json.data;
}