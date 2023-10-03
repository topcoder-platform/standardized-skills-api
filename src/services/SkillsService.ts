import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import * as postgresHelper from '../utils/postgres-helper';
import { FindAndCountOptions } from 'sequelize';
import _ from 'lodash';
import type { IAutocompleteRequestQuery, IBasePaginatedRequest } from '../interfaces';
import { supplyDefaultPaginationValues } from '../utils/helpers';
import { skill } from '../db/models/skill';

const logger = new LoggerClient('SkillsService');

async function getAllSkills(query: IBasePaginatedRequest) {
    const response = {
        skills: [] as skill[],
        page: 1,
        perPage: 0,
        total: 0,
        totalPages: 0,
    };
    const defaultPagination = supplyDefaultPaginationValues(query, 'name');
    logger.info(`Fetching all skills based on ${JSON.stringify(defaultPagination)}`);

    const pgQuery: FindAndCountOptions = {
        limit: defaultPagination.perPage,
        offset: (defaultPagination.page - 1) * defaultPagination.perPage,
        order: [[defaultPagination.sortBy, defaultPagination.sortOrder]],
    };
    try {
        const skillsAndCount = await postgresHelper.findAndCountAllSkills(pgQuery);
        if (_.isEmpty(skillsAndCount) || _.isUndefined(skillsAndCount)) {
            return response;
        } else {
            response.skills = skillsAndCount.rows;
            response.page = defaultPagination.page;
            response.perPage = defaultPagination.perPage;
            response.total = skillsAndCount.count;
            response.totalPages = Math.ceil(skillsAndCount.count / defaultPagination.perPage);
            return response;
        }
    } catch (error) {
        logger.error('Unable to fetch all skills');
        throw error;
    }
}

async function autocompleteSkills(query: IAutocompleteRequestQuery) {
    logger.info(`Fetching autocomplete suggestions based on ${JSON.stringify(query)}`);
    try {
        return await esHelper.autocompleteSkills({ term: query.term, size: query.size });
    } catch (error) {
        logger.error('Unable to fetch autocomplete suggestions!');
        throw error;
    }
}

export { getAllSkills, autocompleteSkills };
