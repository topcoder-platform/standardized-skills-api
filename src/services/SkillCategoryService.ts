import { isEmpty, isNull, pick } from 'lodash';
import db, { Skill, SkillCategory } from '../db';
import {
    AllCategoriesRequestQueryDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';
import { LoggerClient } from '../utils/LoggerClient';
import { BadRequestError, ConflictError, NotFoundError } from '../utils/errors';
import { findAndCountPaginated } from '../utils/postgres-helper';
import { AuthUser } from '../types';
import { ensureUserCanManageCategories } from '../utils/helpers';

const logger = new LoggerClient('SkillCategoryService');

/**
 * Gets a category by its id
 * @param { string } id the uuid id of category
 * @returns {Promise<Partial<SkillCategory>>} the id, name and description of the category
 */
export const getCategoryById = async (id: string): Promise<Partial<SkillCategory>> => {
    logger.info(`Retrieve category with id ${id}`);

    return await db.sequelize.transaction(async () => {
        const category = await SkillCategory.findByPk(id);
        if (isNull(category)) {
            throw new NotFoundError(`Category with id ${id} does not exist!`);
        }
        logger.info(`Catgeory with id ${id} retrieved successfully`);

        return pick(category, ['id', 'name', 'description']);
    });
};

/**
 * Gets all categories with pagination
 * @param {AllCategoryRequestQueryDto} query the request query params for pagination and sorting
 * @returns {Promise<{ categories: number | SkillCategory[];}
 * | {page: number;
 *    perPage: number;
 *    total: number;
 *    totalPages: number;
 *    categories: number | SkillCategory[];}>} An array of category id, names and description along with pagination values
 */
export const getAllCategories = async (
    query: AllCategoriesRequestQueryDto,
): Promise<
    | {
          categories: number | SkillCategory[];
      }
    | {
          page: number;
          perPage: number;
          total: number;
          totalPages: number;
          categories: number | SkillCategory[];
      }
> => {
    logger.info(`Fetching all categories with query: ${JSON.stringify(query)}`);
    const { categories, ...paginationValues } = await findAndCountPaginated<SkillCategory>(
        SkillCategory,
        'categories',
        query,
        {
            attributes: ['id', 'name', 'description'],
        },
    );

    isEmpty(categories)
        ? logger.info('No categories found!')
        : logger.info(`Fetched categories successfully: ${JSON.stringify(categories)}`);

    return {
        categories,
        ...paginationValues,
    };
};

/**
 * Creates a new category from the name and description in the payload
 * @param {AuthUser} user the authenticated user details from the JWT
 * @param {NewCategoryRequestBodyDto} body the name and description of the new category
 * @returns {Promise<{ id: string; name: string; description: string | undefined; }>} the newly
 * created category
 */
export const createNewCategory = async (
    user: AuthUser,
    body: NewCategoryRequestBodyDto,
): Promise<{ id: string; name: string; description: string | undefined }> => {
    logger.info(`Creating new category as per data ${JSON.stringify(body)}`);

    ensureUserCanManageCategories(user);

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

/**
 * Updates a category by its id
 * @param {AuthUser} user the authenticated user details from the JWT
 * @param {string} id the the id of the category to update
 * @param {UpdateCategoryRequestBodyDto} body the id, name and description values of the category to update
 * @returns {Promise<Partial<SkillCategory>>} the id, name and description of the newly
 * created category
 */
export const updateCategory = async (
    user: AuthUser,
    id: string,
    body: UpdateCategoryRequestBodyDto,
): Promise<Partial<SkillCategory>> => {
    logger.info(`Updating category ${id} with data ${JSON.stringify(body)}`);

    ensureUserCanManageCategories(user);

    return await db.sequelize.transaction(async () => {
        if (!(await categoryIdExists(id))) {
            throw new NotFoundError(`Category with id ${id} does not exist!`);
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
                    id,
                },
            },
        );

        logger.info(`Category ${id} updated successfully`);
        return pick(await SkillCategory.findByPk(id), ['id', 'name', 'description']);
    });
};

/**
 * Deletes a category by its id
 * @param {AuthUser} user the authenticated user details from the JWT
 * @param {string} id the uuid id of category
 */
export const deleteCategory = async (user: AuthUser, id: string) => {
    logger.info(`Deleting category with id ${id}`);

    ensureUserCanManageCategories(user);

    await db.sequelize.transaction(async () => {
        if (!(await categoryIdExists(id))) {
            throw new NotFoundError(`Category with id ${id} does not exist!`);
        }

        if (await categoryHasSkills(id)) {
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

/**
 * Checks whether the category name is unique
 * @param {string} name the name of the category
 * @returns {Promise<boolean>} a boolean result wrapped in a promise
 */
const categoryNameIsUnique = async (name: string): Promise<boolean> => {
    return (
        (await SkillCategory.findOne({
            where: {
                name,
            },
        })) === null
    );
};

/**
 * Checks whether the id of the category exists
 * @param id the uuid id of the category
 * @returns {Promise<boolean>} a boolean result wrapped in a promise
 */
const categoryIdExists = async (id: string): Promise<boolean> => {
    return (await SkillCategory.findByPk(id)) !== null;
};

const categoryHasSkills = async (id: string): Promise<boolean> => {
    return (
        (await Skill.count({
            where: {
                category_id: id,
            },
        })) > 0
    );
};
