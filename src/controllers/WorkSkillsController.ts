import { NextFunction, Request, Response } from 'express';

import { JobSkillsRequestBodyDto, SetWorkSkillsRequestBodyDto, JobIdRequestParamDto } from '../dto';
import * as workSkillsService from '../services/WorkSkillsService';
import * as core from 'express-serve-static-core';

export default class WorkSkillsController {
    /**
     * Create association for the work & provided skills
     */
    async setWorkSkills(
        req: Request<{ [key: string]: string }, any, SetWorkSkillsRequestBodyDto, core.Query, Record<string, any>>,
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

    /**
     * Associates the given skills with the given job/gig id
     */
    async setJobSkills(
        req: Request<JobIdRequestParamDto, any, JobSkillsRequestBodyDto, core.Query, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await workSkillsService.createJobSkills(req.params.jobId, req.body.skillIds);
            res.status(201).json();
        } catch (error) {
            next(error);
        }
    }
}
