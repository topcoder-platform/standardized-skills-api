import * as skillsService from '../services/SkillsService';
import { SuccessResponse } from '../utils/SuccessResponse';
import { NextFunction, Request, Response } from 'express';

export default class SkillsController {
    /**
     * Get all skills
     */
    getSkills = async (req: Request, res: Response) => {
        const allSkills = await skillsService.getAllSkills();

        const response = new SuccessResponse(allSkills);

        res.status(200).json(response);
    };

    getAutocompleteSuggestions = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await skillsService.autocompleteSkills(req.query);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };
}
