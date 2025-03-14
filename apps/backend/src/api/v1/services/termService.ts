import tempTerms from "./tempTerms";

// it MAY be desirable to make this a shared definition
// consider if a Term is identical/extensible between front/backend
export type Term = {
    id: number,
    title: string,
    definition: string,
    isFavourite: boolean
}

export const fetchAllTerms = async(): Promise<Term[]> => {
    return tempTerms;
}

export const createTerm = async(term: {
    title: string,
    definition: string
}): Promise<Term> => {
    const newTerm: Term = {
        id: tempTerms.length + 1, 
        isFavourite: false,
        ...term
    };

    tempTerms.push(newTerm);
    return newTerm;
}

export const updateTerm = async(
    id: string,
    term: {title: string, definition: string, isFavourite: boolean}
): Promise<Term> => {
    const parsedId = Number.parseInt(id);
    const index: number = tempTerms.findIndex(t => t.id === parsedId);
    if(index === -1){
        throw new Error(`Term with id ${id} not found`);
    }

    tempTerms[index] = {id: parsedId, ...term};
    return tempTerms[index];
}

export const deleteTerm = async(id: string): Promise<void> => {
    const parsedId = Number.parseInt(id);
    const index: number = tempTerms.findIndex(t => t.id === parsedId);

    if(index === -1){
        throw new Error(`Term with id ${id} not found`);
    }

    tempTerms.splice(index, 1);
}