import { NextFunction, Response } from 'express';

import { AuthorizedRequest } from '../types';
import { SkillEventRequestBodyDto } from '../dto';
import * as skillEventsService from '../services/SkillEventsService';

export default class SkillEventsController {
    /**
     * Process the skill events
     */
    async processSkillEvent(
        req: AuthorizedRequest<{ [key: string]: string }, any, any, SkillEventRequestBodyDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await skillEventsService.processSkillEvent(req.authUser, req.body);
            res.status(201).json();
        } catch (error) {
            next(error);
        }
    }
}
