import { NextFunction, Request, Response } from 'express';

import { SetWorkSkillsRequestBodyDto } from '../dto';
import * as workSkillsService from '../services/WorkSkillsService';

export default class WorkSkillsController {
    /**
     * Create association for the work & provided skills
     */
    async setWorkSkills(
        req: Request<{ [key: string]: string }, any, any, SetWorkSkillsRequestBodyDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await workSkillsService.createWorkSkills(req.body);
            res.status(201).json();
        } catch (error) {
            next(error);
        }
    }
}
