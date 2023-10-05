import elasticsearch from '@elastic/elasticsearch';
import { envConfig } from '../config';
import _ from 'lodash';
import * as config from '../config';
import * as helper from '../utils/helpers';
import { LoggerClient } from '../utils/LoggerClient';
import * as constants from '../config/constants';

let skillsESClient: elasticsearch.Client;
const logger = new LoggerClient('es-helper');

export function getSkillsESClient() {
    if (skillsESClient) return skillsESClient;
    else return new elasticsearch.Client({ node: envConfig.SKILLS_ES.HOST });
}

export async function bulkCreateSkillsES(
    skills: {
        id: string;
        name: string;
        category: { id: string; name: string };
        createdAt: string;
        updatedAt: string;
    }[],
) {
    logger.info(
        `Bulk indexing skills for autocomplete: ${JSON.stringify(skills)} in ES index ${
            config.envConfig.SKILLS_ES.INDEX
        }`,
    );
    try {
        skillsESClient = getSkillsESClient();

        const body = _.flatMap(skills, (skill) => [
            {
                index: {
                    _index: config.envConfig.SKILLS_ES.INDEX,
                    _id: skill.id,
                },
            },
            {
                doc: _.assign({}, skill, {
                    name_suggest: { input: helper.generateEmsiSkillSuggestionInputs(skill.name) },
                }),
            },
        ]);

        await skillsESClient.bulk({ body, refresh: config.envConfig.SKILLS_ES.REFRESH as boolean });
        logger.info(`Bulk indexing successful in ${config.envConfig.SKILLS_ES.INDEX} ES index`);
    } catch (error) {
        logger.error(`Error encountered while bulk indexing skills in ${config.envConfig.SKILLS_ES.INDEX} ES index`);
        logger.error(JSON.stringify(error));
        throw error;
    }
}

export const autocompleteSkills = async (query: { term: string; size: number }) => {
    logger.info(`Querying ES index ${config.envConfig.SKILLS_ES.INDEX} for autocomplete suggestions of skill`);
    try {
        skillsESClient = getSkillsESClient();

        const params = {
            index: config.envConfig.SKILLS_ES.INDEX,
            body: {
                suggest: {
                    StandardizedSkills: {
                        text: query.term,
                        completion: {
                            field: 'doc.name_suggest',
                            size: constants.MAX_SUGGESTIONS_SIZE,
                        },
                    },
                },
            },
        };
        const docs = await skillsESClient.search(params);

        const suggestedSkills = docs.body.suggest.StandardizedSkills[0].options
            .sort(
                (doc11: Record<string, any>, doc2: Record<string, any>) =>
                    doc2._source.doc.name.toLowerCase().startsWith(query.term.toLowerCase()) -
                    doc11._source.doc.name.toLowerCase().startsWith(query.term.toLowerCase()),
            )
            .slice(0, query.size)
            .map((doc: Record<string, any>) => {
                return {
                    id: doc._source.doc.id,
                    name: doc._source.doc.name,
                    category: doc._source.doc.category,
                };
            });
        logger.info(
            `Successfully queried ES index ${config.envConfig.SKILLS_ES.INDEX} for autocomplete skill suggestions`,
        );
        return suggestedSkills;
    } catch (error) {
        logger.error(
            `Failed to query ES index ${
                config.envConfig.SKILLS_ES.INDEX
            } for autocomplete suggestions, error in ES: ${JSON.stringify(error)}`,
        );
        throw error;
    }
};
