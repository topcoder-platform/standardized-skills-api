import { isEmpty, isNull, omit, pick } from 'lodash';
import db, { SkillCategory } from '../db';
import {
    AllCategoryRequestQueryDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';
import { LoggerClient } from '../utils/LoggerClient';
import { ConflictError, ForbiddenError, NotFoundError } from '../utils/errors';
import { findAndCountPaginated } from '../utils/postgres-helper';
import { AuthUser } from '../types';
import { hasAdminRole } from '../utils/helpers';

const logger = new LoggerClient('SkillCategoryService');

export const getAllCategories = async (query: AllCategoryRequestQueryDto) => {
    logger.info(`Fetching all categories with query: ${JSON.stringify(query)}`);
    const { categories, ...paginationValues } = await findAndCountPaginated<SkillCategory>(
        SkillCategory,
        'categorie',
        query,
        {
            attributes: ['id', 'name', 'description'],
        },
    );
    if (isEmpty(categories)) {
        throw new NotFoundError('No categories exist!');
    }
    logger.info(`Fethced categories successfully: ${JSON.stringify(categories)}`);

    return {
        categories,
        ...paginationValues,
    };
};

export const createNewCategory = async (user: AuthUser, body: NewCategoryRequestBodyDto) => {
    logger.info(`Creating new category as per data ${JSON.stringify(body)}`);

    if (!user.isMachine && !hasAdminRole(user)) {
        throw new ForbiddenError('You are not allowed to perform this action');
    }

    return await db.sequelize.transaction(async () => {
        if (
            !isNull(
                await SkillCategory.findOne({
                    where: {
                        name: body.name,
                    },
                }),
            )
        ) {
            throw new ConflictError(`Category with name ${body.name} already exists!`);
        }

        const category = await SkillCategory.create({
            name: body.name,
            description: body.description ?? undefined,
        });

        logger.info(`New category successfully created ${JSON.stringify(category)}`);
        return {
            id: category.id,
            name: category.name,
            description: category.description,
        };
    });
};

export const updateCategory = async (user: AuthUser, body: UpdateCategoryRequestBodyDto) => {
    logger.info(`Updating category ${body.id} with data ${JSON.stringify(omit(body, 'id'))}`);

    if (!user.isMachine && !hasAdminRole(user)) {
        throw new ForbiddenError('You are not allowed to perform this action');
    }

    return await db.sequelize.transaction(async () => {
        if (
            !isNull(
                await SkillCategory.findOne({
                    where: {
                        name: body.name,
                    },
                }),
            )
        ) {
            throw new ConflictError(`Category with name ${body.name} already exists!`);
        }

        await SkillCategory.update(
            {
                name: body.name,
                description: body.description,
            },
            {
                where: {
                    id: body.id,
                },
            },
        );

        logger.info(`Category ${body.id} updated successfully`);
        return pick(await SkillCategory.findByPk(body.id), ['id', 'name', 'description']);
    });
};
