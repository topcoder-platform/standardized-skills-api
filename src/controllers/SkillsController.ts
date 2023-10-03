import * as skillsService from '../services/SkillsService';
import { NextFunction, Request, Response } from 'express';
import * as helper from '../utils/helpers';
import type { IAutocompleteRequestQuery, IBasePaginatedRequest } from '../interfaces';

export default class SkillsController {
    /**
     * Get all skills
     */
    getSkills = async (
        req: Request<{ [key: string]: string }, any, any, IBasePaginatedRequest, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const skills = await skillsService.getAllSkills(req.query);
            helper.setResHeaders(res, skills);
            res.status(200).json(skills.skills);
        } catch (error) {
            next(error);
        }
    };

    getAutocompleteSuggestions = async (
        req: Request<{ [key: string]: string }, any, any, IAutocompleteRequestQuery, Record<string, any>>,
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
}
