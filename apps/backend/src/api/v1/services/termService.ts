import { Term } from "@prisma/client";
import prisma from "../../../../prisma/client"
import { TermWithUsers } from "../types/termWithUsers";

export const fetchAllTerms = async(): Promise<TermWithUsers[]> => {
    return prisma.term.findMany({
        include: {
            userTerms: true
        }
    });
}

// note the return of a TermWithUsers here
export const getTermById = async(id: number): Promise<TermWithUsers | null> => {
    const term = prisma.term.findUnique({
        where: {
            id: id,
        },
        include: {
            userTerms: true
        }
    });

    if(!term) {
        return null;
    } else{
        return term;
    }
}

export const createTerm = async(termData: {
    title: string,
    definition: string
}): Promise<Term> => {
    const newTerm: Term = await prisma.term.create({
        data: {
            ...termData
        }
    });

    return newTerm;
}

export const updateTerm = async(
    id: number,
    term: {title: string, definition: string}
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