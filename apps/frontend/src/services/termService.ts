import { Term } from "../interfaces/term";
import data from "./terms.json";

type TermResponse = {message: String, data: Term[]};

const BASE_URL = "/api";
const TERM_ENDPOINT = "/v1/terms"

export async function fetchTerms(): Promise<Term[]> {
    const termResponse: Response = await fetch(`${BASE_URL}${TERM_ENDPOINT}`);

    if(!termResponse.ok) {
        throw new Error("Failed to fetch terms");
    }

    const json = await termResponse.json() as TermResponse;
    // return await termResponse.json() as Term[];
    return json.data;
}

export async function getFavouriteTerms() {
    const allData = await data;
    // this filter should occur in the db
    const favourites = allData.filter(t => t.isFavourite);
    return favourites;
}

export async function toggleTermSave(termId: number) {
    const termToSave = data.find(t => t.id === termId);

    if(termToSave) {
        termToSave.isFavourite = !termToSave.isFavourite;
    } else {
        throw new Error(`Term not found with id ${termId}`);
    }
}