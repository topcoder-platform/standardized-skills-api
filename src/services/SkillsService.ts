import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import { FindAndCountOptions } from 'sequelize';
import _ from 'lodash';
import { skill } from '../db/models/skill';
import { GetAutocompleteRequestQueryDto, GetSkillsQueryRequestDto } from '../dto';
import { findAndCountAll } from '../utils/postgres-helper';

const logger = new LoggerClient('SkillsService');

async function getAllSkills(query: GetSkillsQueryRequestDto) {
    const response = {
        skills: [] as skill[],
        page: 1,
        perPage: 0,
        total: 0,
        totalPages: 0,
    };

    const pgQuery: FindAndCountOptions = {
        limit: query.perPage,
        offset: (query.page - 1) * query.perPage,
    };

    if (query.sortBy) {
        // sorting is optional
        pgQuery.order = [[query.sortBy, query.sortOrder]];
    }

    try {
        const skillsAndCount = await findAndCountAll('Skill', pgQuery);
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
