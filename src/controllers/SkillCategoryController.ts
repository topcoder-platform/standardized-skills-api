import { NextFunction, Request, Response } from 'express';
import { AllCategoryRequestDto } from '../dto/CategoryRequest.dto';
import { getAllCategories } from '../services/SkillCategoryService';
import { setResHeaders } from '../utils/helpers';

export default class SkillCategoryController {
    async getAllCategroies(
        req: Request<{ [key: string]: string }, any, any, AllCategoryRequestDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allCategories = await getAllCategories(req.query);
            if (!req.query.disablePagination) {
                setResHeaders(res, allCategories);
            }
            res.status(200).json(allCategories.categories);
        } catch (error) {
            next(error);
        }
    }
}
