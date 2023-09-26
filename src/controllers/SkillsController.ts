import { getAllSkills } from '../services/Skills';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Request, Response } from 'express';

export default class SkillsController {
    /**
     * Get all skills
     */
    getSkills = async (req: Request, res: Response) => {
        const allSkills = await getAllSkills();

        const response = new SuccessResponse(allSkills);

        res.status(200).json(response);
    };
}
