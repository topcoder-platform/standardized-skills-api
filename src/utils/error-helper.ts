import { BadRequestError, ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError } from './errors';

/**
 * Rethrows the appropriate error depending on the status code
 * @param error - The error object containing the error details
 */
export function handleAndTransformAPIError(statusCode: number, message: string, internalServerErrorMsg: string) {
    switch (statusCode) {
        case 400:
            throw new BadRequestError(message);
            break;

        case 401:
            throw new UnauthorizedError(message);
            break;

        case 403:
            throw new ForbiddenError(message);
            break;

        case 404:
            throw new NotFoundError(message);
            break;

        case 500:
            throw new InternalServerError(internalServerErrorMsg);
            break;
    }
}
