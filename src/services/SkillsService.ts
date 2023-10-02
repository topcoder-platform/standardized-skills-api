import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import * as postgresHelper from '../utils/postgres-helper';
import { FindAndCountOptions } from 'sequelize';
import _ from 'lodash';
import type { autocompleteQuery, basePaginatedRequest } from '../interfaces';

const logger = new LoggerClient('SkillsService');

async function getAllSkills(query: basePaginatedRequest) {
    logger.info(`Fetching all skills based on ${JSON.stringify(query)}`);
    const response = {
        skills: [] as any[],
        page: 1,
        perPage: 0,
        total: 0,
        totalPages: 0,
    };
    const pgQuery: FindAndCountOptions = {
        limit: query.perPage ?? 20,
        offset: ((query.page ?? 1) - 1) * (query.perPage ?? 20),
        order: [[query.sortBy ?? 'name', query.sortOrder ?? 'ASC']],
    };
    try {
        const skillsAndCount = await postgresHelper.findAndCountAllSkills(pgQuery);
        if (_.isEmpty(skillsAndCount) || _.isUndefined(skillsAndCount)) {
            return response;
        } else {
            response.skills = skillsAndCount.rows;
            response.page = query.page ?? 1;
            response.perPage = query.perPage ?? 20;
            response.total = skillsAndCount.count;
            response.totalPages = Math.ceil(skillsAndCount.count / (query.perPage ?? 20));
            return response;
        }
    } catch (error) {
        logger.error('Unable to fetch all skills');
        throw error;
    }
}

async function autocompleteSkills(query: autocompleteQuery) {
    logger.info(`Fetching autocomplete suggestions based on ${JSON.stringify(query)}`);
    try {
        return await esHelper.autocompleteSkills({ term: query.term, size: query.size });
    } catch (error) {
        logger.error('Unable to fetch autocomplete suggestions!');
        throw error;
    }
}

export { getAllSkills, autocompleteSkills };
