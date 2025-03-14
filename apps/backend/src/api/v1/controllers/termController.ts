import { Request, Response, NextFunction } from "express";
import * as termService from "../services/termService";

export const getAllTerms = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const terms = await termService.fetchAllTerms();
        res.status(200).json({message: "Got terms", data: terms});
    } catch (error) {
        next(error);
    }
};

export const createTerm = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newTerm = await termService.createTerm(req.body);
        res.status(201).json({message: "Term created", data: newTerm});
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
            req.params.id,
            req.body
        );
        res.status(200).json({message: "Term updated", data: updatedTerm});
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
        await termService.deleteTerm(req.params.id);
        res.status(200).json({message: "Term deleted" });
    } catch(error) {
        next(error);
    }
};