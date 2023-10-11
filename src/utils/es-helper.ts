import elasticsearch7 from 'elasticsearch7';
import elasticsearch6 from 'elasticsearch6';
import { envConfig } from '../config';
import _ from 'lodash';
import * as config from '../config';
import * as helper from '../utils/helpers';
import { LoggerClient } from '../utils/LoggerClient';
import * as constants from '../config/constants';

let skillsESClient: elasticsearch7.Client;
let jobsESClient: elasticsearch7.Client;
let challengesESClient: elasticsearch6.Client;
const logger = new LoggerClient('es-helper');

export function getSkillsESClient() {
    if (skillsESClient) return skillsESClient;
    else {
        skillsESClient = new elasticsearch7.Client({ node: envConfig.SKILLS_ES.HOST });
        return skillsESClient;
    }
}

export function getChallengesESClient() {
    if (challengesESClient) return challengesESClient;
    else {
        challengesESClient = new elasticsearch6.Client({ node: envConfig.CHALLENGES_ES.HOST });
        return challengesESClient;
    }
}

export function getJobsESClient() {
    if (jobsESClient) return jobsESClient;
    else {
        jobsESClient = new elasticsearch7.Client({ node: envConfig.JOBS_ES.HOST });
        return jobsESClient;
    }
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

export const getChallengeById = async (id: string) => {
    logger.info(`Fetch challenge with id: ${id} from ES`);
    try {
        challengesESClient = getChallengesESClient();
        const challenge: Record<string, any> = challengesESClient.get({
            id,
            index: envConfig.CHALLENGES_ES.CHALLENGES_INDEX,
            type: envConfig.CHALLENGES_ES.CHALLENGES_INDEX,
            refresh: envConfig.CHALLENGES_ES.REFRESH as boolean,
        });
        logger.info(`Challenge with id: ${id} found in ES`);
        return challenge.body._source;
    } catch (error) {
        logger.error(`Unable to fetch challenge with id: ${id} from ES`);
        return {};
    }
};

export const getJobById = async (id: string) => {
    logger.info(`Fetch job with id: ${id} from ES`);
    try {
        jobsESClient = getJobsESClient();
        const job: Record<string, any> = jobsESClient.get({
            id,
            index: envConfig.JOBS_ES.JOB_INDEX,
            type: envConfig.JOBS_ES.JOB_DOCUMENT_TYPE,
            refresh: envConfig.JOBS_ES.REFRESH as boolean,
        });
        logger.info(`Job with id: ${id} found in ES`);
        return job.body._source;
    } catch (error) {
        logger.error(`Unable to fetch job with id: ${id} from ES`);
        return {};
    }
};

export const updateSkillsInChallengeES = async (
    id: string,
    skills: { id: string; name: string; category: { id: string; name: string } }[],
) => {
    logger.info(`Update skills in challenge ${id} with skills: ${JSON.stringify(skills)}`);

    challengesESClient = getChallengesESClient();
    await challengesESClient.update({
        index: envConfig.CHALLENGES_ES.CHALLENGES_INDEX,
        type: envConfig.CHALLENGES_ES.CHALLENGES_DOCUMENT_TYPE,
        id,
        body: {
            doc: {
                skills,
            },
        },
    });
    logger.info(`Challenge ${id} successfully updated with skills`);
};

export const updateSkillsInJobES = async (
    id: string,
    skills: { id: string; name: string; category: { id: string; name: string } }[],
) => {
    logger.info(`Update skills in challenge ${id} with skills: ${JSON.stringify(skills)}`);

    jobsESClient = getJobsESClient();
    await jobsESClient.update({
        index: envConfig.JOBS_ES.JOB_INDEX,
        type: envConfig.JOBS_ES.JOB_DOCUMENT_TYPE,
        id,
        body: {
            doc: {
                skills,
            },
        },
    });
    logger.info(`Job ${id} successfully updated with skills`);
};
