import { NextFunction, Request, Response } from 'express';
import { AllCategoryRequestDto, NewCategoryRequestDto } from '../dto/CategoryRequest.dto';
import { createNewCategory, getAllCategories } from '../services/SkillCategoryService';
import { setResHeaders } from '../utils/helpers';
import { AuthorizedRequest } from '../types';
import * as core from 'express-serve-static-core';

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

    async createCategory(
        req: AuthorizedRequest<{ [key: string]: string }, any, NewCategoryRequestDto, core.Query, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const category = await createNewCategory(req.authUser, req.body);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    }
}
