import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import { FindAndCountOptions } from 'sequelize';
import { isEmpty, isNull } from 'lodash';
import {
    GetAutocompleteRequestQueryDto,
    GetSkillsQueryRequestDto,
    SkillCreationRequestBodyDto,
    SkillUpdatePatchRequestBodyDto,
    SkillUpdatePutRequestBodyDto,
} from '../dto';
import db, { Skill, SkillCategory } from '../db';
import { BadRequestError, ConflictError, InternalServerError, NotFoundError } from '../utils/errors';
import { AuthUser } from '../types';
import dayjs from 'dayjs';
import * as constants from '../config/constants';
import { Op } from 'sequelize';
import { findAndCountPaginated } from '../utils/postgres-helper';

const logger = new LoggerClient('SkillsService');

/**
 * Gets all skills that match the given criteria, with the skillIds being given
 * the highest preference for search followed by name only if skillIds are
 * not provided
 * @param {GetSkillsQueryRequestDto} query - the request query parameters
 * @returns {Promise<{
 *    skills: number | Skill[];}
 * | {
 * page: number;
 * perPage: number;
 * total: number;
 * totalPages: number;
 * skills: number | Skill[];}>}
 */
export async function getAllSkills(query: GetSkillsQueryRequestDto): Promise<
    | {
          skills: number | Skill[];
      }
    | {
          page: number;
          perPage: number;
          total: number;
          totalPages: number;
          skills: number | Skill[];
      }
> {
    logger.info(`Fetching skills based on request ${JSON.stringify(query)}`);

    // attributes of skill and category to be fetched
    const findAndCountOptions: FindAndCountOptions = {
        attributes: ['id', 'name', 'description'],
        include: {
            model: SkillCategory,
            as: 'category',
            attributes: ['id', 'name', 'description'],
        },
    };

    // if skillIds have been specified
    if (query.skillId) {
        findAndCountOptions['where'] = {
            id: query.skillId,
        };
    }

    // if name has been specified but not skillIds as skillIds take preference
    if (query.name && !query.skillId) {
        findAndCountOptions['where'] = {
            name: {
                [Op.in]: query.name,
            },
        };
    }

    const { skills, ...paginationValues } = await findAndCountPaginated<Skill>(
        Skill,
        'skills',
        query,
        findAndCountOptions,
    );
    isEmpty(skills)
        ? logger.info('No skills found!')
        : logger.info(`Fetched skills successfully: ${JSON.stringify(skills)}`);

    return {
        skills,
        ...paginationValues,
    };
}

/**
 * Fetch a list of suggested skills based on a query string that will be matched against the skill names
 */
export async function autocompleteSkills(query: GetAutocompleteRequestQueryDto) {
    logger.info(`Fetching autocomplete suggestions based on ${JSON.stringify(query)}`);
    try {
        return await esHelper.autocompleteSkills({ term: query.term, size: query.size });
    } catch (error) {
        logger.error('Unable to fetch autocomplete suggestions!');
        throw error;
    }
}

/**
 * Gets a skill by its id
 * @param skillId - the id of the skill to be fetched
 * @returns {{ id: string; name: string; description: string | undefined; category: { id: string; name: string; description: string | undefined;} }}
 */
export async function getSkillById(skillId: string): Promise<{
    id: string;
    name: string;
    description: string | undefined;
    category: { id: string; name: string; description: string | undefined };
}> {
    logger.info(`Fetching skill by id ${skillId}`);

    const skill = await Skill.findByPk(skillId, {
        include:
            // expand the category information in the response
            {
                model: db.models.SkillCategory,
                as: 'category',
            },
    });
    if (!skill || isNull(skill)) {
        throw new NotFoundError(`Skill with id ${skillId} does not exist!`);
    }
    logger.info(`Skill with id ${skillId} retrieved successfully`);
    return {
        id: skill.id,
        name: skill.name,
        description: skill.description,
        category: {
            id: skill.category.id,
            name: skill.category.name,
            description: skill.category.description,
        },
    };
}

/**
 * creates a new skill and assigns it to an existing category
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {SkillCreationRequestBodyDto} newSkill - the name, description and the category of the new skill
 * @returns {Promise<{ id: string; name: string; description: string | undefined; category: { id: string; name: string; description: string | undefined } }>}
 * the newly created skill along with its category information
 */
export const createSkill = async (
    user: AuthUser,
    newSkill: SkillCreationRequestBodyDto,
): Promise<{
    id: string;
    name: string;
    description: string | undefined;
    category: { id: string; name: string; description: string | undefined };
}> => {
    logger.info(`Creating skill from data ${JSON.stringify(newSkill)}`);

    return await db.sequelize.transaction(async () => {
        // skill name has to be unique
        if (!(await skillNameIsUnique(newSkill.name))) {
            throw new ConflictError(`Skill with name ${newSkill.name} already exists!`);
        }

        // the category to which a skill is assigned must exist
        const category = await SkillCategory.findByPk(newSkill.categoryId);
        if (isNull(category)) {
            throw new BadRequestError(`The category with id ${newSkill.categoryId} does not exist!`);
        }

        // create skill in postgres
        const skill = await Skill.create({
            name: newSkill.name,
            description: newSkill.description,
            category_id: newSkill.categoryId,
        });

        // create skill in skills autocomplete ES
        await esHelper.createSkillInAutocompleteES({
            id: skill.id,
            name: skill.name,
            category: {
                id: category.id,
                name: category.name,
            },
            createdAt: dayjs(skill.created_at).format(constants.ES_SKILL_TIME_FORMAT),
            updatedAt: dayjs(skill.updated_at).format(constants.ES_SKILL_TIME_FORMAT),
        });

        logger.info(`Skill created successfully ${JSON.stringify(skill)}`);
        return {
            id: skill.id,
            name: skill.name,
            description: skill.description,
            category: {
                id: category.id,
                name: category.name,
                description: category.description,
            },
        };
    });
};

/**
 * Updates a skill in postgreSQL and Elasticsearch index
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {SkillUpdatePutRequestBodyDto} body - the request body containing the new skills details
 * @param {string} id - the id of the skill to update
 * @returns {Promise<{ id: string; name: string; description: string | undefined; category: { id: string; name: string; description: string | undefined } }>}
 * the newly updated skill along with its category information
 */
export const updateSkill = async (
    user: AuthUser,
    body: SkillUpdatePutRequestBodyDto,
    id: string,
): Promise<{
    id: string;
    name: string;
    description: string | undefined;
    category: { id: string; name: string; description: string | undefined };
}> => {
    logger.info(`Update skill ${id} as per data ${JSON.stringify(body)}`);

    return await db.sequelize.transaction(async () => {
        // valid skillId is provided
        if (isNull(await Skill.findByPk(id))) {
            throw new NotFoundError(`Skill with id ${id} does not exist!`);
        }

        // skill name is unique
        if (!(await skillNameIsUnique(body.name, id))) {
            throw new ConflictError(`Skill with name ${body.name} already exists!`);
        }

        // the category to associate the skill with must be valid
        if (isNull(await SkillCategory.findByPk(body.categoryId))) {
            throw new NotFoundError(`Category with id ${body.categoryId} does not exist!`);
        }

        //update the skill in PostgreSQL and Elasticsearch index
        await Skill.update(
            {
                name: body.name,
                description: body.description,
                category_id: body.categoryId,
            },
            {
                where: {
                    id,
                },
            },
        );

        // fetch updated skill details from PostgreSQL
        const skillDetails = await Skill.findByPk(id, {
            attributes: ['id', 'name', 'description', 'created_at', 'updated_at'],
            include: {
                model: SkillCategory,
                as: 'category',
                attributes: ['id', 'name', 'description'],
            },
        });

        if (isNull(skillDetails)) {
            throw new InternalServerError('Unable to fetch updated skill details from database!');
        }

        await esHelper.updateSkillInAutocompleteES({
            id: skillDetails.id,
            name: skillDetails.name,
            category: {
                id: skillDetails.category.id,
                name: skillDetails.category.name,
            },
            createdAt: dayjs(skillDetails.created_at).format(constants.ES_SKILL_TIME_FORMAT),
            updatedAt: dayjs(skillDetails.updated_at).format(constants.ES_SKILL_TIME_FORMAT),
        });

        logger.info(`Skill with id ${id} updated successfully`);
        return {
            id: skillDetails.id,
            name: skillDetails.name,
            description: skillDetails.description,
            category: {
                id: skillDetails.category.id,
                name: skillDetails.category.name,
                description: skillDetails.category.description,
            },
        };
    });
};

/**
 * Updates a skill partially via patch in postgreSQL and Elasticsearch index
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {SkillUpdatePatchRequestBodyDto} body - the request body containing the new skills details
 * @param {string} id - the id of the skill to update
 * @returns {Promise<{ id: string; name: string; description: string | undefined; category: { id: string; name: string; description: string | undefined } }>}
 * the newly updated skill along with its category information
 */
export const patchSkill = async (
    user: AuthUser,
    body: SkillUpdatePatchRequestBodyDto,
    id: string,
): Promise<{
    id: string;
    name: string;
    description: string | undefined;
    category: { id: string; name: string; description: string | undefined };
}> => {
    logger.info(`Update skill ${id} as per data ${JSON.stringify(body)}`);

    return await db.sequelize.transaction(async () => {
        // check for valid request body
        if (!body.name && body.description === undefined && !body.categoryId) {
            throw new BadRequestError('No data provded for skill update');
        }

        // valid skillId is provided
        const skill = await Skill.findByPk(id);
        if (isNull(skill)) {
            throw new NotFoundError(`Skill with id ${id} does not exist!`);
        }

        // skill name is unique
        if (body.name && !(await skillNameIsUnique(body.name, id))) {
            throw new ConflictError(`Skill with name ${body.name} already exists!`);
        }

        // the category to associate the skill with must be valid
        if (body.categoryId && isNull(await SkillCategory.findByPk(body.categoryId))) {
            throw new NotFoundError(`Category with id ${body.categoryId} does not exist!`);
        }

        //update the skill in PostgreSQL and Elasticsearch index
        await Skill.update(
            {
                name: body.name,
                description: body.description,
                category_id: body.categoryId,
            },
            {
                where: {
                    id,
                },
            },
        );

        // fetch updated skill details from PostgreSQL
        const skillDetails = await Skill.findByPk(id, {
            attributes: ['id', 'name', 'description', 'created_at', 'updated_at'],
            include: {
                model: SkillCategory,
                as: 'category',
                attributes: ['id', 'name', 'description'],
            },
        });

        if (isNull(skillDetails)) {
            throw new InternalServerError('Unable to fetch updated skill details from database!');
        }

        await esHelper.updateSkillInAutocompleteES({
            id: skillDetails.id,
            name: skillDetails.name,
            category: {
                id: skillDetails.category.id,
                name: skillDetails.category.name,
            },
            createdAt: dayjs(skillDetails.created_at).format(constants.ES_SKILL_TIME_FORMAT),
            updatedAt: dayjs(skillDetails.updated_at).format(constants.ES_SKILL_TIME_FORMAT),
        });

        logger.info(`Skill with id ${id} updated successfully`);
        return {
            id: skillDetails.id,
            name: skillDetails.name,
            description: skillDetails.description,
            category: {
                id: skillDetails.category.id,
                name: skillDetails.category.name,
                description: skillDetails.category.description,
            },
        };
    });
};

/**
 * Deletes a skill from the PostgreSQL and Elasticsearch index
 * @param {AuthUser} user - the authenticated user details from the JWT
 * @param {string} id - the id of the skill to be deleted
 */
export const deleteSkill = async (user: AuthUser, id: string) => {
    logger.info(`Deleting skill with id ${id}`);

    return await db.sequelize.transaction(async () => {
        const skill = await Skill.findByPk(id);
        if (isNull(skill)) {
            throw new NotFoundError(`The skill with id ${id} does not exist!`);
        }

        await Skill.destroy({
            where: {
                id,
            },
        });

        esHelper.deleteSkillFromAutocompleteES(id);

        logger.info(`Successfully deleted skill with id ${id}`);
    });
};

/**
 * Checks whether the skill name is unique
 * @param {string} name - the name of the skill
 * @returns {Promise<boolean>} a boolean result wrapped in a promise
 */
const skillNameIsUnique = async (name: string, id?: string): Promise<boolean> => {
    const existingSkill = await Skill.findOne({
        where: {
            name,
        },
        paranoid: false,
    });

    /**
     * no skill exists with the specified name RETURN true
     * skill exists and the provided id to check against is same as of the skill we want to update RETURN true
     * skill exists and no id is supplied for comparison (used for creating new skill) RETURN false
     */
    if (existingSkill === null) {
        return true;
    } else if (id && existingSkill.id === id) {
        return true;
    } else {
        return false;
    }
};
