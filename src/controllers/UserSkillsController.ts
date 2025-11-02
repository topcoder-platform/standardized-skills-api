import { NextFunction, Response } from 'express';

import {
    GetUserSkillsDisplayModeParamDto,
    GetUserSkillsDisplayModesQueryDto,
    GetUserSkillsQueryDto,
    UpdateUserSkillsRequestBodyDto,
    UserIdParamDto,
} from '../dto';
import * as UserSkillsService from '../services/UserSkillsService';
import { setResHeaders } from '../utils/helpers';
import { AuthorizedRequest } from '../types';

export default class UserSkillsController {
    /**
     * Get the display modes for the user skills
     */
    async getUserSkillsDisplayModes(
        req: AuthorizedRequest<any, any, any, GetUserSkillsDisplayModesQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const { displayModes, ...paginationData } = await UserSkillsService.getUserSkillsDisplayModes(req.query);
            setResHeaders(res, paginationData);
            res.status(200).json(displayModes);
        } catch (error) {
            next(error);
        }
    }
    /**
     * Get the display modes for the user skills
     */
    async getUserSkillsDisplayModeByName(
        req: AuthorizedRequest<GetUserSkillsDisplayModeParamDto, any, any, any, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const displayMode = await UserSkillsService.getUserSkillsDisplayModeByName(req.params.name);
            res.status(200).json(displayMode);
        } catch (error) {
            next(error);
        }
    }

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
        req: AuthorizedRequest<{ [key: string]: string }, any, UpdateUserSkillsRequestBodyDto>,
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
        req: AuthorizedRequest<{ [key: string]: string }, any, UpdateUserSkillsRequestBodyDto>,
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
