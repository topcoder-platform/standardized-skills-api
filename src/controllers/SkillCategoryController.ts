import { NextFunction, Request, Response } from 'express';
import {
    AllCategoryRequestQueryDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';
import {
    createNewCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from '../services/SkillCategoryService';
import { setResHeaders } from '../utils/helpers';
import { AuthorizedRequest } from '../types';
import * as core from 'express-serve-static-core';

export default class SkillCategoryController {
    async getCategoryById(
        req: Request<{ [key: string]: string }, any, any, core.Query, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const category = await getCategoryById(req.params.categoryId);
            res.status(200).json(category);
        } catch (error) {
            next(error);
        }
    }

    async getAllCategroies(
        req: Request<{ [key: string]: string }, any, any, AllCategoryRequestQueryDto, Record<string, any>>,
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
        req: AuthorizedRequest<
            { [key: string]: string },
            any,
            NewCategoryRequestBodyDto,
            core.Query,
            Record<string, any>
        >,
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

    async updateCategory(
        req: AuthorizedRequest<
            { [key: string]: string },
            any,
            UpdateCategoryRequestBodyDto,
            core.Query,
            Record<string, any>
        >,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const category = await updateCategory(req.authUser, req.body);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    }

    async deleteCategory(
        req: AuthorizedRequest<{ [key: string]: string }, any, any, core.Query, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await deleteCategory(req.authUser, req.params.categoryId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
