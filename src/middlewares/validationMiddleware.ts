import { BadRequestError } from '../utils/errors';
import { plainToInstance } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

function getValidationErrorsMessage(errors: ValidationError[]): string {
    return errors
        .map((error: ValidationError) => {
            if (error.constraints) {
                return Object.values<string>(error.constraints);
            } else if (error.children?.length) {
                return `${error.property}: [${getValidationErrorsMessage(error.children)}]`;
            }
            return '';
        })
        .join(', ');
}

/**
 * @name validationMiddleware
 * @description Allows use of decorator and non-decorator based validation
 * @param type dto
 * @param source The source to validate - one of 'body' | 'query' | 'params'
 * @param skipMissingProperties When skipping missing properties
 * @param whitelist Even if your object is an instance of a validation class it can contain additional properties that are not defined
 * @param forbidNonWhitelisted If you would rather to have an error thrown when any non-whitelisted properties are present
 */
export const validationMiddleware = (
    type: any,
    source: 'body' | 'query' | 'params',
    skipMissingProperties = false,
    whitelist = true,
    forbidNonWhitelisted = true,
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const dto = plainToInstance(type, req[source]);
        validateOrReject(dto, { skipMissingProperties, whitelist, forbidNonWhitelisted })
            .then(() => {
                req[source] = dto;
                next();
            })
            .catch((errors: ValidationError[]) => {
                const message = getValidationErrorsMessage(errors);
                next(new BadRequestError(message));
            });
    };
};

export default validationMiddleware;
