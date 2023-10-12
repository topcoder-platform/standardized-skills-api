import { NextFunction, Response } from 'express';

import {
    GetUserSkillsRequestQueryDto,
    UpdateUserSkillsRequestBodyDto,
    RemoveUserSkillsRequestBodyDto,
} from '../dto';
import * as UserSkillsService from '../services/UserSkillsService';
import { setResHeaders } from '../utils/helpers';
import { AuthorizedRequest } from '../types';

export default class UserSkillsController {
    /**
     * Create association for the User & provided skills
     */
    async getUserSkills(
        req: AuthorizedRequest<{ [key: string]: string }, any, any, GetUserSkillsRequestQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            
            const skills = await UserSkillsService.getUserSkills(req.params.userId as string, req.query);
            setResHeaders(res, skills);
            res.status(200).json(skills.skills);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Create association for the User & provided skills
     */
    async updateUserSkills(
        req: AuthorizedRequest<{ [key: string]: string }, any, any, UpdateUserSkillsRequestBodyDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await UserSkillsService.updateUserSkills(req.authUser, Number(req.params.userId), req.body);
            res.status(200).json();
        } catch (error) {
            next(error);
        }
    }

    /**
     * Create association for the User & provided skills
     */
    async removeUserSkills(
        req: AuthorizedRequest<{ [key: string]: string }, any, any, RemoveUserSkillsRequestBodyDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await UserSkillsService.removeUserSkills(req.authUser, Number(req.params.userId), req.body);
            res.status(200).json();
        } catch (error) {
            next(error);
        }
    }
}
