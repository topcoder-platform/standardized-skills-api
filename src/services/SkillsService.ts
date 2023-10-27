import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import { FindAndCountOptions } from 'sequelize';
import { isEmpty, isNull, isUndefined, pick } from 'lodash';
import { GetAutocompleteRequestQueryDto, GetSkillsQueryRequestDto, SkillCreationRequestBodyDto } from '../dto';
import db, { Skill, SkillCategory } from '../db';
import { BadRequestError, ConflictError, NotFoundError } from '../utils/errors';
import { AuthUser } from '../types';
import { ensureUserHasAdminPrivilege } from '../utils/helpers';
import dayjs from 'dayjs';
import * as constants from '../config/constants';

const logger = new LoggerClient('SkillsService');

/**
 * Gets all skills (including category) as paginated response
 * @param {GetSkillsQueryRequestDto} query the request query params for pagination and sorting
 */
export async function getAllSkills(query: GetSkillsQueryRequestDto) {
    const response = {
        skills: [] as Skill[],
        page: 1,
        perPage: 0,
        total: 0,
        totalPages: 0,
    };

    const pgQuery: FindAndCountOptions = {
        limit: query.perPage,
        offset: (query.page - 1) * query.perPage,
        include: [
            // expand the category information in the response
            {
                model: db.models.SkillCategory,
                as: 'category',
            },
        ],
    };

    if (query.sortBy) {
        // sorting is optional
        pgQuery.order = [[query.sortBy, query.sortOrder]];
    }

    if (query.skillId) {
        // filtering by skillId is optional
        pgQuery.where = {
            id: [].concat(query.skillId as any),
        };
    }

    try {
        const skillsAndCount = await Skill.findAndCountAll(pgQuery);
        if (isEmpty(skillsAndCount) || isUndefined(skillsAndCount)) {
            return response;
        } else {
            response.skills = skillsAndCount.rows;
            response.page = query.page;
            response.perPage = query.perPage;
            response.total = skillsAndCount.count;
            response.totalPages = Math.ceil(skillsAndCount.count / query.perPage);
            return response;
        }
    } catch (error) {
        logger.error('Unable to fetch all skills');
        throw error;
    }
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
 */
export async function getSkillById(skillId: string) {
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
    return pick(skill, ['id', 'name', 'category.name', 'category.id', 'description', 'createdAt', 'updatedAt']);
}

/**
 * creates a new skill and assigns it to an existing category
 * @param {AuthUser} user the authenticated user details from the JWT
 * @param {SkillCreationRequestBodyDto} newSkill the name, description and the category of the new skill
 * @returns {Promise<{ id: string; name: string; description: string | undefined; category: { id: string; name: string;} }>}
 * the newly created skill along with its category information
 */
export const createSkill = async (
    user: AuthUser,
    newSkill: SkillCreationRequestBodyDto,
): Promise<{ id: string; name: string; description: string | undefined; category: { id: string; name: string } }> => {
    logger.info(`Creating skill from data ${JSON.stringify(newSkill)}`);

    ensureUserHasAdminPrivilege(user);

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
            },
        };
    });
};

/**
 * Checks whether the skill name is unique
 * @param {string} name the name of the skill
 * @returns {Promise<boolean>} a boolean result wrapped in a promise
 */
const skillNameIsUnique = async (name: string, id?: string): Promise<boolean> => {
    const existingSkill = await Skill.findOne({
        where: {
            name,
        },
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
