import { StatusCodes } from 'http-status-codes';

export class StandardizedSkillApiError extends Error {
    statusCode: number;
    rawErrors: string[] = [];
    constructor(statusCode: number, message: string, rawErrors?: string[]) {
        super(message);

        this.statusCode = statusCode;
        if (rawErrors) this.rawErrors = rawErrors;
        Error.captureStackTrace(this, this.constructor);
        Object.setPrototypeOf(this, StandardizedSkillApiError.prototype);
    }
}

export class NotFoundError extends StandardizedSkillApiError {
    constructor(path: string) {
        super(StatusCodes.NOT_FOUND, `The requested path ${path} not found!`);
    }
}

export class BadRequestError extends StandardizedSkillApiError {
    constructor(message: string, errors?: string[]) {
        super(StatusCodes.BAD_REQUEST, message, errors);
    }
}

export class ForbiddenError extends StandardizedSkillApiError {
    constructor(message: string, errors?: string[]) {
        super(StatusCodes.FORBIDDEN, message, errors);
    }
}

export class UnauthorizedError extends StandardizedSkillApiError {
    constructor(message: string, errors?: string[]) {
        super(StatusCodes.UNAUTHORIZED, message, errors);
    }
}

export class InternalServerError extends StandardizedSkillApiError {
    constructor(message: string, errors?: string[]) {
        super(StatusCodes.INTERNAL_SERVER_ERROR, message, errors);
    }
}

export class ServiceUnavailableError extends StandardizedSkillApiError {
    constructor(message: string, errors?: string[]) {
        super(StatusCodes.SERVICE_UNAVAILABLE, message, errors);
    }
}

export class ConflictError extends StandardizedSkillApiError {
    constructor(message: string, errors?: string[]) {
        super(StatusCodes.CONFLICT, message, errors);
    }
}
