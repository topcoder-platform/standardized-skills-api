import { StatusCodes } from 'http-status-codes';

export class StandardizedSkillApiError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
        Object.setPrototypeOf(this, StandardizedSkillApiError.prototype);
    }
}

export class NotFoundError extends StandardizedSkillApiError {
    constructor(message: string) {
        super(StatusCodes.NOT_FOUND, message);
    }
}

export class BadRequestError extends StandardizedSkillApiError {
    constructor(message: string) {
        super(StatusCodes.BAD_REQUEST, message);
    }
}

export class ForbiddenError extends StandardizedSkillApiError {
    constructor(message: string) {
        super(StatusCodes.FORBIDDEN, message);
    }
}

export class UnauthorizedError extends StandardizedSkillApiError {
    constructor(message: string) {
        super(StatusCodes.UNAUTHORIZED, message);
    }
}

export class InternalServerError extends StandardizedSkillApiError {
    constructor(message: string) {
        super(StatusCodes.INTERNAL_SERVER_ERROR, message);
    }
}

export class ServiceUnavailableError extends StandardizedSkillApiError {
    constructor(message: string) {
        super(StatusCodes.SERVICE_UNAVAILABLE, message);
    }
}

export class ConflictError extends StandardizedSkillApiError {
    constructor(message: string) {
        super(StatusCodes.CONFLICT, message);
    }
}
