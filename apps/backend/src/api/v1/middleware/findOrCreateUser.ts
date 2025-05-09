import { User } from "@prisma/client";
import * as userService from "../services/userService";
import { Request, Response, NextFunction } from "express";

export const findOrCreateUser = async(
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const userId: string = req.body.userId;
        let user : User|null = await userService.getUserById(userId);
        console.log("Trying to find user");
        if(!user) {
            user = await userService.createUser({id: req.body.userId});
        }

        next();
    } catch(error) {
        next(error);
    }
}