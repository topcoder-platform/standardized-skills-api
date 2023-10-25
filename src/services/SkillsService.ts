import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import { FindAndCountOptions } from 'sequelize';
import { isEmpty, isNull, isUndefined, pick } from 'lodash';
import { GetAutocompleteRequestQueryDto, GetSkillsQueryRequestDto } from '../dto';
import db, { Skill } from '../db';
import { NotFoundError } from '../utils/errors';

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

    try {
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
    } catch (error) {
        logger.error(`Unable to fetch skill by id ${skillId}`);
        throw error;
    }
}
