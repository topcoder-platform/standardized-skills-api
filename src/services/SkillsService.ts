import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import { FindAndCountOptions } from 'sequelize';
import _ from 'lodash';
import { GetAutocompleteRequestQueryDto, GetSkillsQueryRequestDto } from '../dto';
import db, { Skill } from '../db';

const logger = new LoggerClient('SkillsService');

async function getAllSkills(query: GetSkillsQueryRequestDto) {
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
        if (_.isEmpty(skillsAndCount) || _.isUndefined(skillsAndCount)) {
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

async function autocompleteSkills(query: GetAutocompleteRequestQueryDto) {
    logger.info(`Fetching autocomplete suggestions based on ${JSON.stringify(query)}`);
    try {
        return await esHelper.autocompleteSkills({ term: query.term, size: query.size });
    } catch (error) {
        logger.error('Unable to fetch autocomplete suggestions!');
        throw error;
    }
}

export { getAllSkills, autocompleteSkills };
