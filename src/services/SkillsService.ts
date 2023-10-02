import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import * as postgresHelper from '../utils/postgres-helper';

const logger = new LoggerClient('SkillsService');

async function getAllSkills() {
    return await postgresHelper.findAndCountAllSkills();
}

async function autocompleteSkills(query: qs.ParsedQs) {
    logger.info(`Fetching autocomplete suggestions based on ${JSON.stringify(query)}`);
    try {
        const esQuery = {
            term: query.term as string,
            size: query.size as any as number,
        };
        return await esHelper.autocompleteSkills(esQuery);
    } catch (error) {
        logger.error('Unable to fetch autocomplete suggestions!');
        throw error;
    }
}

export { getAllSkills, autocompleteSkills };
