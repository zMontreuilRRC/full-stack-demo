import { Request, Response, NextFunction } from "express";
import {Term} from "@prisma/client";
import * as termService from "../services/termService";
import { successResponse } from "../models/responseModel";

/**
 * Controller methods determine how to handle requests and respond to requests.
 * It sends the appropriate components of the request to services (if needed)
 * and responds to the request with an appropriate code/body.
 */

export const getAllTerms = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const terms = await termService.fetchAllTerms();
        res.status(200).json(
            successResponse(terms, "Terms retrieved succesfully")
        );
    } catch (error) {
        // errorHandler middleware will always be the last to catch error throws
        next(error);
    }
};

export const getTermById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const term: Term | null = 
            await termService.getTermById(Number.parseInt(req.params.id));
        if(term) {
            res.json(successResponse(term, "Term retrieved succesfully"));
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
        res.status(201)
            .json(successResponse(newTerm, "Term created succesfully"));
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
        res.status(200)
            .json(successResponse(updatedTerm, "Term updated succesfully"));
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