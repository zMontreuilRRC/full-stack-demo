import { User } from "@prisma/client";
import * as userService from "../services/userService";
import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";

/**
 * If a sessionToken is included in Authorization header, get userId from Clerk
 * If user does not exist, add user to back-end database
 */
export const findOrCreateUser = async(
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        // clerk getAuth method authenticates user against HTTP request Authorization heading
        const auth = getAuth(req);
        const userId = auth.userId;
        
        // store in simple userId table 
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