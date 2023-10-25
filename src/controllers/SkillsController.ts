import * as skillsService from '../services/SkillsService';
import { NextFunction, Request, Response } from 'express';
import * as helper from '../utils/helpers';
import * as dtos from '../dto/SkillsRequests.dto';

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
            helper.setResHeaders(res, skills);
            res.status(200).json(skills.skills);
        } catch (error) {
            next(error);
        }
    };

    /**
     * Gets a skill by id
     */
    getSkillById = async (
        req: Request<{ [key: string]: string }, any, any, dtos.SkillIdRequestPathParamDto, Record<string, any>>,
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
}
