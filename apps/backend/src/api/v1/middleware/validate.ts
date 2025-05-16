import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

import { MiddlewareFunction, RequestData } from "../../../../types/express";

export const validate = <T>(schema: ObjectSchema<T>, data:T): void => {
    const { error } = schema.validate(data, {abortEarly: false});
    if(error) {
        throw new Error(
            `Validation error: ${
                error.details.map(x => x.message)
                .join(", ")
            }`
        );
    }
};

export const validateRequest = (schema: ObjectSchema): MiddlewareFunction => {
    return(req: Request, res: Response, next: NextFunction) => {
        try {
            const data: RequestData = {
                ...req.body,
                ...req.params,
                ...req.query
            };
            validate(schema, data);
            next();
        } catch(error) {
            res.status(400).json({error: (error as Error).message});
        } 
    };
};