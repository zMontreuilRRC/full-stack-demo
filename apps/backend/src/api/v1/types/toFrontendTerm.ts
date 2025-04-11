import { FrontendTerm } from "@shared/types/frontend-term";
import { Term, UserTerm } from "@prisma/client";

export function toFrontendTerm(
    backendTerm: Term, 
    userTerms: UserTerm[],
    userId: string
): FrontendTerm {
    const {id, title, definition } = backendTerm;

    return {
        id: id,
        title: title,
        definition: definition,
        isFavourite: userTerms.some(ut => ut.userId === userId)
    }
}