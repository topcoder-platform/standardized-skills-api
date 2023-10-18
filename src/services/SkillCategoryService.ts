import { isEmpty, omit, pick } from 'lodash';
import db, { Skill, SkillCategory } from '../db';
import {
    AllCategoryRequestQueryDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';
import { LoggerClient } from '../utils/LoggerClient';
import { BadRequestError, ConflictError, ForbiddenError, NotFoundError } from '../utils/errors';
import { findAndCountPaginated } from '../utils/postgres-helper';
import { AuthUser } from '../types';
import { hasAdminRole } from '../utils/helpers';

const logger = new LoggerClient('SkillCategoryService');

export const getCategoryById = async (id: string) => {
    logger.info(`Retrieve category with id ${id}`);

    return await db.sequelize.transaction(async () => {
        if (!(await categoryIdExists(id))) {
            throw new NotFoundError(`Category with id ${id} does not exist!`);
        }

        const category = await SkillCategory.findByPk(id);
        logger.info(`Catgeory with id ${id} retrieved successfully`);

        return pick(category, ['id', 'name', 'description']);
    });
};

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
        if (!(await categoryNameIsUnique(body.name))) {
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
        if (!(await categoryIdExists(body.id))) {
            throw new NotFoundError(`Category with id ${body.id} does not exist!`);
        }

        if (!(await categoryNameIsUnique(body.name))) {
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

export const deleteCategory = async (user: AuthUser, id: string) => {
    logger.info(`Deleting category with id ${id}`);

    if (!user.isMachine && !hasAdminRole(user)) {
        throw new ForbiddenError('You are not allowed to perform this action');
    }

    await db.sequelize.transaction(async () => {
        if (!(await categoryIdExists(id))) {
            throw new NotFoundError(`Category with id ${id} does not exist!`);
        }

        if (
            (await Skill.count({
                where: {
                    category_id: id,
                },
            })) > 0
        ) {
            throw new BadRequestError(`Cannot delete category with id ${id} as it has skills associated with it!`);
        }

        await SkillCategory.destroy({
            where: {
                id,
            },
        });
        logger.info(`Catgeory with ${id} deleted successfully`);
        return;
    });
};

const categoryNameIsUnique = async (name: string): Promise<boolean> => {
    return (
        (await SkillCategory.findOne({
            where: {
                name,
            },
        })) === null
    );
};

const categoryIdExists = async (id: string): Promise<boolean> => {
    return (await SkillCategory.findByPk(id)) !== null;
};
