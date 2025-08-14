import { User } from "@prisma/client";
import * as userService from "../services/userService";
import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";

export const findOrCreateUser = async(
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const auth = getAuth(req);
        const userId = auth.userId;
        
        if(userId) {
            let backendUser : User|null = await userService.getUserById(userId);
            if(!backendUser) {
                backendUser= await userService.createUser({id: userId});
            }
        }
        
        // If userId not found with auth, set userId to null 
        // Prevents userId from being included erroneously in the request body
        req.userId = userId;
        next();
    } catch(error) {
        next(error);
    }
}