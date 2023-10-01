import elasticsearch from '@elastic/elasticsearch';
import { envConfig } from '../config';
import _ from 'lodash';
import * as config from '../config';
import * as helper from '../utils/helpers';
import { LoggerClient } from '../services/LoggerClient';

let skillsESClient: elasticsearch.Client;
const logger = new LoggerClient('es-helper');

export function getSkillsESClient() {
    if (skillsESClient) return skillsESClient;
    else return new elasticsearch.Client({ node: envConfig.SKILLS_ES.HOST });
}

export async function bulkCreateSkillsES(skills: { id: string; name: string; createdAt: string; updatedAt: string }[]) {
    logger.info(`Bulk indexing skills for autocomplete: ${JSON.stringify(skills)}`);
    skillsESClient = getSkillsESClient();

    const body = _.flatMap(skills, (skill) => [
        {
            index: {
                _index: config.envConfig.SKILLS_ES.INDEX,
                _id: skill.id,
            },
        },
        {
            doc: _.assign({}, skill, { name_suggest: { input: helper.generateEmsiSkillSuggestionInputs(skill.name) } }),
        },
    ]);

    try {
        const response = await skillsESClient.bulk({ body, refresh: config.envConfig.SKILLS_ES.REFRESH as boolean });
        logger.info(`Bulk indexing successful in ${config.envConfig.SKILLS_ES.INDEX} index`);
        logger.info(JSON.stringify(response));
    } catch (error) {
        logger.error(`Error encountered while bulk indexing skills in ${config.envConfig.SKILLS_ES.INDEX} index`);
        logger.error(JSON.stringify(error));
    }
}
