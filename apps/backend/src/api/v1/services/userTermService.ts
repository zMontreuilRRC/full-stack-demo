import { PrismaClient, UserTerm } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserTerm = async(
    userId: string,
    termId: number
): Promise<UserTerm | null> => {
    const userTerm = await prisma.userTerm.findUnique({
        where: {
            userId_termId: {
                userId: userId,
                termId: termId
            }
        }
    });

    if(!userTerm) {
        return null;
    } else {
        return userTerm;
    }
} 

export const createUserTerm =  async(
    userId: string,
    termId: number
): Promise<UserTerm> => {
    const existingUserTerm = await prisma.userTerm.findUnique({
        where: {
            userId_termId: {
                userId: userId,
                termId: termId
            }
        }
    });

    if(existingUserTerm) {
        throw new Error(`Term with id ${termId} already associated with user with id ${userId}`);
    }

    const newUserTerm = await prisma.userTerm.create({
        data: {
            userId: userId,
            termId: termId
        }
    });

    return newUserTerm;
}

export const deleteUserTerm = async( 
    userId: string, 
    termId: number
): Promise<void> => {
    await prisma.userTerm.delete({
        where: {
            userId_termId: {
                userId: userId,
                termId: termId
            }
        }
    });
}