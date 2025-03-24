import {Request, Response, NextFunction} from "express";
import { errorResponse } from "../models/responseModel";

interface ExtendedError extends Error {
    code?: string;
    statusCode?: number;
}

const errorHandler = (
    err: ExtendedError,
    _req: Request,
    res: Response,
    _next: NextFunction
): void => {
    const statusCode = err.statusCode || 500;
    const code = err.code || "UNKNOWN_ERROR";

    console.error(`Error: ${err.message} (Code: ${code})`);

    res.status(statusCode).json(
        errorResponse(`An unexpected error occured: ${code}`)
    );
};

export default errorHandler;