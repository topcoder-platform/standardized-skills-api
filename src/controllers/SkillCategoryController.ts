import { NextFunction, Request, Response } from 'express';
import {
    AllCategoryRequestQueryDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';
import * as SkillCategoryService from '../services/SkillCategoryService';
import { setResHeaders } from '../utils/helpers';
import { AuthorizedRequest } from '../types';
import * as core from 'express-serve-static-core';

export default class SkillCategoryController {
    /**
     * Gets a category by id
     */
    async getCategoryById(
        req: Request<{ [key: string]: string }, any, any, core.Query, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const category = await SkillCategoryService.getCategoryById(req.params.categoryId);
            res.status(200).json(category);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Gets all categories with pagination
     */
    async getAllCategories(
        req: Request<{ [key: string]: string }, any, any, AllCategoryRequestQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allCategories = await SkillCategoryService.getAllCategories(req.query);
            if (!req.query.disablePagination) {
                setResHeaders(res, allCategories);
            }
            res.status(200).json(allCategories.categories);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Creates a new category
     */
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
            const category = await SkillCategoryService.createNewCategory(req.authUser, req.body);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Updates the name and/or description of an existing category
     */
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
            const category = await SkillCategoryService.updateCategory(req.authUser, req.body);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Deletes an existing category by id
     */
    async deleteCategory(
        req: AuthorizedRequest<{ [key: string]: string }, any, any, core.Query, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await SkillCategoryService.deleteCategory(req.authUser, req.params.categoryId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
