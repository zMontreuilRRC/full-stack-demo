import { Request, Response, NextFunction } from "express";
import * as userTermService from "../services/userTermService";
import { successResponse } from "../models/responseModel";
import { UserTerm } from "@prisma/client";

export const createUserTerm = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newUserTerm: UserTerm = await userTermService.createUserTerm(
            req.body.userId,
            Number.parseInt(req.body.termId)
        );
        res.status(201)
            .json(successResponse(newUserTerm, "New UserTerm created succesfully"));
    } catch(error) {
        next(error);
    }
}

export const deleteUserTerm = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await userTermService.removeUserTerm(
            req.body.userId,
            Number.parseInt(req.body.termId)
        );
        res.status(200)
            .json(successResponse(null, "UserTerm deleted succesfully"));
    } catch(error) {
        next(error);
    }
}