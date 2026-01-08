import { isEmpty, isNull, map, omit, pick } from 'lodash';
import db, { Skill, SkillCategory } from '../db';
import {
    AllCategoriesRequestQueryDto,
    GetCategorySkillsRequestQueryDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryPartialRequestDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';
import { LoggerClient } from '../utils/LoggerClient';
import { BadRequestError, ConflictError, InternalServerError, NotFoundError } from '../utils/errors';
import { findAndCountPaginated } from '../utils/postgres-helper';
import { AuthUser } from '../types';
import { FindAndCountOptions, Op } from 'sequelize';

const logger = new LoggerClient('SkillCategoryService');

/**
 * Gets a category by its id
 * @param { string } id - the uuid id of category
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
 * @param {AllCategoryRequestQueryDto} query - the request query params for pagination and sorting
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

    // build the search query
    const findAndCountOptions: FindAndCountOptions = {
        attributes: ['id', 'name', 'description'],
    };
    if (query.name) {
        findAndCountOptions['where'] = {
            name: {
                [Op.iLike]: `%${query.name}%`,
            },
        };
        query = omit(query, 'name');
    }

    const { categories, ...paginationValues } = await findAndCountPaginated<SkillCategory>(
        SkillCategory,
        'categories',
        query,
        findAndCountOptions,
    );

    if (isEmpty(categories)) {
        logger.info('No categories found!');
    } else {
        logger.info('Fetched categories successfully!');
    }

    return {
        categories,
        ...paginationValues,
    };
};

/**
 * Gets the skills belonging to a category
 * @param {string} categoryId - the id of the cateogory whose skills are to be fetched
 * @param {GetCategorySkillsRequestQueryDto} query - the request query
 * * @returns {Promise<{ skills: number | Skill[];}
 * | {page: number;
 *    perPage: number;
 *    total: number;
 *    totalPages: number;
 *    skills: number | Skill[];
 * }>} An array of skill id, names and description along with pagination values
 */
export const getCategorySkills = async (
    categoryId: string,
    query: GetCategorySkillsRequestQueryDto,
): Promise<
    | { skills: number | Skill[] }
    | {
          page: number;
          perPage: number;
          total: number;
          totalPages: number;
          skills: number | Skill[];
      }
> => {
    logger.info(`Fetching all skills belonging to category ${categoryId}`);

    if (isNull(await SkillCategory.findByPk(categoryId))) {
        throw new NotFoundError(`Category with id ${categoryId} does not exist!`);
    }

    const { skills, ...paginationValues } = await findAndCountPaginated<Skill>(Skill, 'skills', query, {
        attributes: ['id', 'name', 'description'],
        where: {
            category_id: categoryId,
        },
    });

    logger.info('Successfully fetched skills belonging to category');
    return {
        skills,
        ...paginationValues,
    };
};

/**
 * Creates a new category from the name and description in the payload
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {NewCategoryRequestBodyDto} body - the name and description of the new category
 * @returns {Promise<{ id: string; name: string; description: string | undefined; }>} the newly
 * created category
 */
export const createNewCategory = async (
    user: AuthUser,
    body: NewCategoryRequestBodyDto,
): Promise<{ id: string; name: string; description: string | undefined }> => {
    logger.info(`Creating new category as per data ${JSON.stringify(body)}`);

    return await db.sequelize.transaction(async () => {
        if (!(await categoryNameIsUnique(body.name))) {
            throw new ConflictError(`Category with name ${body.name} already exists!`);
        }

        const category = await SkillCategory.create({
            name: body.name,
            description: body.description,
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
 * Bulk assigns skills to new categories
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {string} categoryId - the id of the category to which the skills are to be assigned
 * @param {Array<string>} skillIds - the uuid ids of skills whose category is to be changed
 * @returns {Promise<Pick<Skill, "id" | "name" | "description" | "category">[]>}
 * the updated skills and their category information
 */
export const bulkAssignSkillsToCategories = async (
    user: AuthUser,
    categoryId: string,
    skillIds: string[],
): Promise<Pick<Skill, 'id' | 'name' | 'description' | 'category'>[]> => {
    logger.info(`Assigning skills ${JSON.stringify(skillIds)} to category ${categoryId}`);

    return await db.sequelize.transaction(async () => {
        // category must be valid
        const category = await SkillCategory.findByPk(categoryId);
        if (isNull(category)) {
            throw new NotFoundError(`Category with id ${categoryId} does not exist`);
        }

        // check if the skill ids are valid
        let skills = await Skill.findAll({
            where: {
                id: skillIds,
            },
        });
        if (skills.length !== skillIds.length) {
            throw new NotFoundError('Not all skill ids exist!');
        }

        // update the category in PostgreSQL
        await Skill.update(
            {
                category_id: categoryId,
            },
            {
                where: {
                    id: skillIds,
                },
            },
        );

        skills = await Skill.findAll({
            attributes: ['id', 'name', 'description', 'created_at', 'updated_at'],
            include: {
                model: SkillCategory,
                as: 'category',
                attributes: ['id', 'name', 'description'],
            },
            where: {
                id: skillIds,
            },
        });

        logger.info(`Successfully assigned skills to new category ${categoryId}`);

        return map(skills, (skill) => pick(skill, ['id', 'name', 'description', 'category']));
    });
};

/**
 * Updates a category by its id
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {string} id - the the id of the category to update
 * @param {UpdateCategoryRequestBodyDto} body - the name and description values of the category to update
 * @returns {Promise<Partial<SkillCategory>>} the id, name and description of the newly
 * updated category
 */
export const updateCategory = async (
    user: AuthUser,
    id: string,
    body: UpdateCategoryRequestBodyDto,
): Promise<Partial<SkillCategory>> => {
    logger.info(`Updating category ${id} with data ${JSON.stringify(body)}`);

    return await db.sequelize.transaction(async () => {
        if (!(await categoryIdExists(id))) {
            throw new NotFoundError(`Category with id ${id} does not exist!`);
        }

        if (!(await categoryNameIsUnique(body.name, id))) {
            throw new ConflictError(`Category with name ${body.name} already exists!`);
        }

        // update category information in PostgreSQL
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

        // fetch updated category information
        const category = await SkillCategory.findByPk(id, {
            attributes: ['id', 'name', 'description'],
        });
        if (isNull(category)) {
            throw new InternalServerError('Unable to connect to database!');
        }

        logger.info(`Category ${id} updated successfully`);
        return category;
    });
};

/**
 * Updates a category by its id partially
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {string} id - the the id of the category to update
 * @param {UpdateCategoryPartialRequestDto} body - the name and description values of the category to update
 * where the name or description or a combination of both can be provided
 * @returns {Promise<Partial<SkillCategory>>} the id, name and description of the newly
 * updated category
 */
export const patchCategory = async (
    user: AuthUser,
    id: string,
    body: UpdateCategoryPartialRequestDto,
): Promise<Partial<SkillCategory>> => {
    logger.info(`Updating category ${id} with data ${JSON.stringify(body)}`);

    return await db.sequelize.transaction(async () => {
        if (!body.name && body.description === undefined) {
            throw new BadRequestError('No data provided for category update');
        }

        if (!(await categoryIdExists(id))) {
            throw new NotFoundError(`Category with id ${id} does not exist!`);
        }

        if (body.name && !(await categoryNameIsUnique(body.name, id))) {
            throw new ConflictError(`Category with name ${body.name} already exists!`);
        }

        // update category in PostgreSQL
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

        // fetch updated category information
        const category = await SkillCategory.findByPk(id, {
            attributes: ['id', 'name', 'description'],
        });
        if (isNull(category)) {
            throw new InternalServerError('Unable to connect to database!');
        }

        logger.info(`Category ${id} updated successfully`);
        return category;
    });
};

/**
 * Deletes a category by its id
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {string} id - the uuid id of category
 */
export const deleteCategory = async (user: AuthUser, id: string) => {
    logger.info(`Deleting category with id ${id}`);

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
        logger.info(`Category with ${id} deleted successfully`);
        return;
    });
};

/**
 * Checks whether the category name is unique
 * @param {string} name - the name of the category
 * @returns {Promise<boolean>} a boolean result wrapped in a promise
 */
const categoryNameIsUnique = async (name: string, id?: string): Promise<boolean> => {
    const existingCategory = await SkillCategory.findOne({
        where: {
            name,
        },
    });

    /**
     * no category exists with the specified name RETURN true
     * category exists and the provided id to check against is same as of the category we want to update RETURN true
     * category exists and no id is supplied for comparison (used for creating new category) RETURN false
     */
    if (existingCategory === null) {
        return true;
    } else if (id && existingCategory.id === id) {
        return true;
    } else {
        return false;
    }
};

/**
 * Checks whether the id of the category exists
 * @param id - the uuid id of the category
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
            paranoid: false,
        })) > 0
    );
};
