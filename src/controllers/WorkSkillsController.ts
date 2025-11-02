import { NextFunction, Request, Response } from 'express';

import { WorkSkillsRequestBodyDto, JobIdRequestParamDto, ChallengeIdRequestParamDto } from '../dto';
import * as workSkillsService from '../services/WorkSkillsService';
import { AuthorizedRequest } from '../types';

export default class WorkSkillsController {
    /**
     * Associates the given skills with the given job/gig id
     */
    async setJobSkills(
        req: Request<JobIdRequestParamDto, any, WorkSkillsRequestBodyDto>,
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

    /**
     * Associates the given skills with the given challenge id
     */
    async setChallengeSkills(
        req: AuthorizedRequest<ChallengeIdRequestParamDto, any, WorkSkillsRequestBodyDto>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await workSkillsService.createChallengeSkills(req.userToken, req.params.challengeId, req.body.skillIds);
            res.status(201).json();
        } catch (error) {
            next(error);
        }
    }
}
