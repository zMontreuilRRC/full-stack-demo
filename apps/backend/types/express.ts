import { Request, Response, NextFunction } from "express";

export type MiddlewareFunction = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;

// type of object in which keys must be strings and values can be anything
export type RequestBody = Record<string, unknown>;

//generic type T defaults to RequestBody
// params and query are key-value pairs with keys of strings, and values of strings (or arrays)
export type RequestData<T extends RequestBody = RequestBody> = {
    body: T,
    params: Record<string, string>;
    query: Record<string, string | string[]>;
}