import { NextFunction, Response } from 'express';

import { GetUserSkillsQueryDto, UpdateUserSkillsRequestBodyDto, UserIdParamDto } from '../dto';
import * as UserSkillsService from '../services/UserSkillsService';
import { setResHeaders } from '../utils/helpers';
import { AuthorizedRequest } from '../types';
import * as core from 'express-serve-static-core';

export default class UserSkillsController {
    /**
     * Get the associated skills for the User
     */
    async getUserSkills(
        req: AuthorizedRequest<UserIdParamDto, any, any, GetUserSkillsQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const skills = await UserSkillsService.getUserSkills(req.authUser, Number(req.params.userId), req.query);

            const isPaginationDisabled =
                req.query.disablePagination !== undefined && `${req.query.disablePagination}` !== 'false';
            if (!isPaginationDisabled) {
                setResHeaders(res, skills);
            }

            res.status(200).json(skills.skills);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Create association for the User & provided skills
     */
    async createUserSkills(
        req: AuthorizedRequest<
            { [key: string]: string },
            any,
            UpdateUserSkillsRequestBodyDto,
            core.Query,
            Record<string, any>
        >,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const skills = await UserSkillsService.createUserSkills(req.authUser, Number(req.params.userId), req.body);
            res.status(201).json(skills.skills);
        } catch (error) {
            next(error);
        }
    }
    /**
     * Update association for the User & provided skills
     */
    async updateUserSkills(
        req: AuthorizedRequest<
            { [key: string]: string },
            any,
            UpdateUserSkillsRequestBodyDto,
            core.Query,
            Record<string, any>
        >,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const skills = await UserSkillsService.updateUserSkills(req.authUser, Number(req.params.userId), req.body);
            res.status(200).json(skills.skills);
        } catch (error) {
            next(error);
        }
    }
}
