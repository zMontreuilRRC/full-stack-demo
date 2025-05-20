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
        if(req.userId) {
            const newUserTerm: UserTerm = await userTermService.createUserTerm(
                req.userId,
                Number.parseInt(req.params.termId)
            );
            res.status(201)
                .json(successResponse(newUserTerm, "New UserTerm created succesfully"));
        } else {
            throw new Error("User not found");
        }
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
        if(req.userId) {
            await userTermService.deleteUserTerm(
                req.userId,
                Number.parseInt(req.params.termId)
            );
            res.status(200)
                .json(successResponse(null, "UserTerm deleted succesfully"));
        } else {
            throw new Error("User not found");
        }
    } catch(error) {
        next(error);
    }
}