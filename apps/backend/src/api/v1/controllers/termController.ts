import { Request, Response, NextFunction } from "express";
import * as termService from "../services/termService";
import { successResponse } from "../models/responseModel";
import { toFrontendTerm } from "../../../../types/toFrontendTerm";
import { TermWithUsers } from "../../../../types/termWithUsers";
import { FrontendTerm } from "@shared/types/frontend-term";

export const getAllTerms = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const userId = req.userId;

        const terms = await termService.fetchAllTerms();

        // front-end only needs to know if the term is or is not "favourited" by the front-end
        // we can therefore map terms from Prisma to terms that only include a boolean for favourites
        const frontendTerms: FrontendTerm[] = terms.map(t =>
            toFrontendTerm(t, userId)
        );

        res.status(200).json(
            successResponse(frontendTerms, `User id: ${userId}`)
        );
    } catch (error) {
        next(error);
    }
};

export const getTermById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const term: TermWithUsers | null = 
            await termService.getTermById(Number.parseInt(req.params.id));
        if(term) {
            const userId = req.userId;
            const responseTerm = toFrontendTerm(term, userId);
            res.json(successResponse(responseTerm, "Term retrieved succesfully"));
        } else{
            throw new Error("Term not found");
        }
    } catch(error) {
        next(error);
    }
}

export const createTerm = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newTerm = await termService.createTerm(req.body);
        const responseTerm = toFrontendTerm(newTerm as TermWithUsers);
        res.status(201)
            .json(successResponse(responseTerm, "Term created succesfully"));
    } catch(error) {
        next(error);
    }
};

export const updateTerm = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedTerm = await termService.updateTerm(
            Number.parseInt(req.params.id),
            req.body
        );
        const responseTerm = toFrontendTerm(updatedTerm as TermWithUsers);
        res.status(200)
            .json(successResponse(responseTerm, "Term updated succesfully"));
    } catch(error) {
        next(error);
    }
};

export const deleteTerm = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await termService.deleteTerm(Number.parseInt(req.params.id));
        res.status(200)
            .json(successResponse(null, "Term deleted succesfully"));
    } catch(error) {
        next(error);
    }
};