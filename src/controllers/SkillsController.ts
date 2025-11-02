import * as skillsService from '../services/SkillsService';
import { NextFunction, Request, Response } from 'express';
import * as helper from '../utils/helpers';
import * as dtos from '../dto/SkillsRequests.dto';
import { AuthorizedRequest } from '../types';

export default class SkillsController {
    /**
     * Get all skills
     */
    getSkills = async (
        req: Request<{ [key: string]: string }, any, any, dtos.GetSkillsQueryRequestDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const skills = await skillsService.getAllSkills(req.query);
            const isPaginationDisabled =
                req.query.disablePagination !== undefined && `${req.query.disablePagination}` !== 'false';
            if (!isPaginationDisabled) {
                helper.setResHeaders(res, skills);
            }
            res.status(200).json(skills.skills);
        } catch (error) {
            next(error);
        }
    };

    /**
     * Gets a skill by id
     */
    getSkillById = async (
        req: Request<dtos.SkillIdRequestPathParamDto>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const skill = await skillsService.getSkillById(req.params.skillId);
            res.status(200).json(skill);
        } catch (error) {
            next(error);
        }
    };

    /**
     * Creates a new skill and assigns it to an existing category
     */
    createSkill = async (
        req: AuthorizedRequest<{ [key: string]: string }, any, dtos.SkillCreationRequestBodyDto>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const skill = await skillsService.createSkill(req.authUser, req.body);
            res.status(201).json(skill);
        } catch (error) {
            next(error);
        }
    };

    /**
     * Updates an existing skill via put
     */
    updateSkill = async (
        req: AuthorizedRequest<dtos.SkillIdRequestPathParamDto, any, dtos.SkillUpdatePutRequestBodyDto>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const skill = await skillsService.updateSkill(req.authUser, req.body, req.params.skillId);
            res.status(200).json(skill);
        } catch (error) {
            next(error);
        }
    };

    /**
     * Restores an archived skill
     */
    restoreSkill = async (
        req: AuthorizedRequest<dtos.SkillIdRequestPathParamDto, any, dtos.SkillUpdatePutRequestBodyDto>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const skill = await skillsService.restoreSkill(req.params.skillId);
            res.status(200).json(skill);
        } catch (error) {
            next(error);
        }
    };

    /**
     * Updates an existing skill partially via patch
     */
    patchSkill = async (
        req: AuthorizedRequest<dtos.SkillIdRequestPathParamDto, any, dtos.SkillUpdatePatchRequestBodyDto>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const skill = await skillsService.patchSkill(req.authUser, req.body, req.params.skillId);
            res.status(201).json(skill);
        } catch (error) {
            next(error);
        }
    };

    /**
     * Deletes an existing skill
     */
    deleteSkill = async (
        req: AuthorizedRequest<dtos.SkillIdRequestPathParamDto>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            await skillsService.deleteSkill(req.authUser, req.params.skillId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getAutocompleteSuggestions = async (
        req: Request<{ [key: string]: string }, any, any, dtos.GetAutocompleteRequestQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const response = await skillsService.autocompleteSkills(req.query);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };

    getFuzzyMatch = async (
        req: Request<{ [key: string]: string }, any, any, dtos.GetAutocompleteRequestQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const response = await skillsService.fuzzyMatch(req.query);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };
}
