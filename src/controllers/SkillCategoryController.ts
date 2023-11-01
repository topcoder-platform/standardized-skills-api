import { NextFunction, Request, Response } from 'express';
import {
    AllCategoriesRequestQueryDto,
    CategoryIdRequestPathParamDto,
    GetCategorySkillsRequestQueryDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryPartialRequestDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';
import * as SkillCategoryService from '../services/SkillCategoryService';
import { setResHeaders } from '../utils/helpers';
import { AuthorizedRequest } from '../types';
import * as core from 'express-serve-static-core';
import { SkillIdsRequestBodyDto } from '../dto';

export default class SkillCategoryController {
    /**
     * Gets a category by id
     */
    async getCategoryById(
        req: Request<CategoryIdRequestPathParamDto, any, any, core.Query, Record<string, any>>,
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
        req: Request<{ [key: string]: string }, any, any, AllCategoriesRequestQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allCategories = await SkillCategoryService.getAllCategories(req.query);
            const isPaginationDisabled =
                req.query.disablePagination !== undefined && `${req.query.disablePagination}` !== 'false';
            if (!isPaginationDisabled) {
                setResHeaders(res, allCategories);
            }
            res.status(200).json(allCategories.categories);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Gets all skills belonging to a category
     */
    async getCategorySkills(
        req: Request<CategoryIdRequestPathParamDto, any, any, GetCategorySkillsRequestQueryDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allSkills = await SkillCategoryService.getCategorySkills(req.params.categoryId, req.query);
            const isPaginationDisabled =
                req.query.disablePagination !== undefined && `${req.query.disablePagination}` !== 'false';
            if (!isPaginationDisabled) {
                setResHeaders(res, allSkills);
            }
            res.status(200).json(allSkills.skills);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Bulk assigns skills to new category
     */
    async bulkAssignSkillsToCategory(
        req: AuthorizedRequest<
            CategoryIdRequestPathParamDto,
            any,
            SkillIdsRequestBodyDto,
            core.Query,
            Record<string, any>
        >,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const updatedSkills = await SkillCategoryService.bulkAssignSkillsToCategories(
                req.authUser,
                req.params.categoryId,
                req.body.skillIds,
            );
            res.status(201).json(updatedSkills);
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
            CategoryIdRequestPathParamDto,
            any,
            UpdateCategoryRequestBodyDto,
            core.Query,
            Record<string, any>
        >,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const category = await SkillCategoryService.updateCategory(req.authUser, req.params.categoryId, req.body);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Updates the name or description or a combination of both
     * of an existing category
     */
    async patchCategory(
        req: AuthorizedRequest<
            CategoryIdRequestPathParamDto,
            any,
            UpdateCategoryPartialRequestDto,
            core.Query,
            Record<string, any>
        >,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const category = await SkillCategoryService.patchCategory(req.authUser, req.params.categoryId, req.body);
            res.status(201).send(category);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Deletes an existing category by id
     */
    async deleteCategory(
        req: AuthorizedRequest<CategoryIdRequestPathParamDto, any, any, core.Query, Record<string, any>>,
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
