/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { StandardizedSkillApiError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';

const logger = new LoggerClient('Error Handler');

export default class ErrorHandler {
    static handle = (): ErrorRequestHandler => {
        return async (err: StandardizedSkillApiError, req: Request, res: Response, next: NextFunction) => {
            const statusCode = err.statusCode || 500;
            logger.error(`Error occurred. Status Code:${statusCode}`);
            if (err.stack) {
                logger.error(err.stack);
            }
            res.status(statusCode).json({
                message: err.message,
            });
        };
    };
}
