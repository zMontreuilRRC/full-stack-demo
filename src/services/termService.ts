import { Term } from "../interfaces/term";
import data from "./terms.json";

// const BASE_URL = "";

export async function fetchTerms(): Promise<Term[]> {
    // placeholder method gets all users from terms json
    // const endpoint: string = "./terms.json";

    // const termResponse: Response = await fetch(`${BASE_URL}${endpoint}`);

    // if(!termResponse.ok) {
    //     throw new Error("Failed to fetch terms");
    // }

    // return await termResponse.json() as Term[];
    return await data;
}

export async function toggleTermSave(termId: number) {
    const termToSave = data.find(t => t.id === termId);

    if(termToSave) {
        termToSave.isFavourite = !termToSave.isFavourite;
    } else {
        throw new Error(`Term not found with id ${termId}`);
    }
}