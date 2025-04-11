import { Term, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchAllTerms = async(): Promise<Term[]> => {
    return prisma.term.findMany();
}

export const getTermById = async(id: number): Promise<Term | null> => {
    try {
        const term = prisma.term.findUnique({
            where: {
                id: id
            }
        });

        if(!term) {
            return null;
        } else{
            return term;
        }
    } catch(error) {
        throw new Error(`Failed to fetch term with id ${id}`);
    }
}

export const createTerm = async(termData: {
    title: string,
    definition: string
}): Promise<Term> => {
    // TODO: update 
    const newTerm: Term = await prisma.term.create({
        data: {
            ...termData
        }
    });

    return newTerm;
}

export const updateTerm = async(
    id: number,
    term: {title: string, definition: string, isFavourite: boolean}
): Promise<Term> => {
    const updateTerm = await prisma.term.update({
        where: {
            id: id
        },
        data: {
            ...term
        }
    });
    return updateTerm;
}

export const deleteTerm = async(id: number): Promise<void> => {
    await prisma.term.delete({
        where: {
            id: id
        }
    });
}