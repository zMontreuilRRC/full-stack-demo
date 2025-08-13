// Use the term type defined in prisma/schema.prisma
import { Term } from "@prisma/client";
// initialize a prisma client if not already and use in queries here
import prisma from "../../../../prisma/client";

/**
 * Services access data as necessary from the Prisma client. They invoke
 * methods on the ORM, which will send queries to the database and respond
 * with data needed.
 * 
 * More general info on Prisma: https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest
 */
export const fetchAllTerms = async(): Promise<Term[]> => {
    // get all records in the term table
    return prisma.term.findMany();
}

export const getTermById = async(id: number): Promise<Term | null> => {
    try {
        // get first record that match the "where" object key/value pairs
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
    // create a new term with termData as its column values, except for isFavourite as false
    const newTerm: Term = await prisma.term.create({
        data: {
            isFavourite: false,
            ...termData
        }
    });

    return newTerm;
}

export const updateTerm = async(
    id: number,
    term: {title: string, definition: string, isFavourite: boolean}
): Promise<Term> => {
    // find a term where the id matches the id parameter, and update with the term argument for values
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
    // delete the term that matches the where key/value pairs
    await prisma.term.delete({
        where: {
            id: id
        }
    });
}