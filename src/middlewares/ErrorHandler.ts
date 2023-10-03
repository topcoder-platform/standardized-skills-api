import { Request, Response, ErrorRequestHandler } from 'express';
import { StandardizedSkillApiError } from '../utils/ApiError';

export default class ErrorHandler {
    static handle = (): ErrorRequestHandler => {
        return async (err: StandardizedSkillApiError, req: Request, res: Response) => {
            const statusCode = err.statusCode || 500;
            console.log('error occurred: ', err.toString(), statusCode);
            console.log(err.stack);
            res.status(statusCode).send({
                success: false,
                message: err.message,
                rawErrors: err.rawErrors ?? [],
                stack: err.stack,
            });
        };
    };
}
