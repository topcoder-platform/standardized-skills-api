/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export default class ErrorHandler {
    static handle = () => {
        return async (err: ApiError, req: Request, res: Response, next: NextFunction) => {
            const statusCode = err.statusCode || 500;
            console.log('error occurred: ', err.toString(), statusCode);
            res.status(statusCode).send({
                success: false,
                message: err.message,
                rawErrors: err.rawErrors ?? [],
                stack: err.stack,
            });
        };
    };
}
