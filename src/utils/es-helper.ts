import elasticsearch7 from 'elasticsearch7';
import elasticsearch6 from 'elasticsearch6';
import { envConfig } from '../config';
import _, { assign } from 'lodash';
import * as config from '../config';
import * as helper from '../utils/helpers';
import { LoggerClient } from '../utils/LoggerClient';
import * as constants from '../config/constants';

let skillsESClient: elasticsearch7.Client;
let jobsESClient: elasticsearch7.Client;
let challengesESClient: elasticsearch6.Client;
let membersESClient: elasticsearch6.Client;
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

export function getMembersESClient() {
    if (membersESClient) return membersESClient;
    else {
        membersESClient = new elasticsearch6.Client({ node: envConfig.MEMBERS_ES.HOST });
        return membersESClient;
    }
}

/**
 * Indexes skills in the standardized_skills_suggester elasticsearch in bulk
 * @param {Array<{id: string; name: string; category: { id: string; name: string }; createdAt: string; updatedAt: string;}>} skills the skills to index in the skills autocomplete suggester ES
 */
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

/**
 * Searches elasticsearch and returns an array of skills that match the query
 * @param {{ term: string; size: number }} query the query object to use for autocomplete
 * @returns {Promise<Array<Record<string, any>>>}
 */
export const autocompleteSkills = async (query: {
    term: string;
    size: number;
}): Promise<Array<Record<string, any>>> => {
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

/**
 * Searches elasticsearch challenge index by the challenge id
 * @param {String} id the uuid v4 id of the challenge
 * @returns {Promise<Record<string, any>>} the challenge document if found or empty object
 */
export const getChallengeById = async (id: string): Promise<Record<string, any>> => {
    logger.info(`Fetch challenge with id: ${id} from ES`);
    try {
        challengesESClient = getChallengesESClient();
        const challenge: Record<string, any> = await challengesESClient.get({
            id,
            index: envConfig.CHALLENGES_ES.CHALLENGES_INDEX,
            type: envConfig.CHALLENGES_ES.CHALLENGES_DOCUMENT_TYPE,
            refresh: envConfig.CHALLENGES_ES.REFRESH as boolean,
        });
        logger.info(`Challenge with id: ${id} found in ES`);
        return challenge.body._source;
    } catch (error) {
        logger.error(`Unable to fetch challenge with id: ${id} from ES`);
        return {};
    }
};

/**
 * Searches elasticsearch job index by the job id
 * @param {String} id the uuid v4 id of the gig
 * @returns {Promise<Record<string, any>>} the gig document if found or empty object
 */
export const getJobById = async (id: string): Promise<Record<string, any>> => {
    logger.info(`Fetch job with id: ${id} from ES`);
    try {
        jobsESClient = getJobsESClient();
        const job: Record<string, any> = await jobsESClient.get({
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

/**
 * Searches elasticsearch members-2020-01 index by the member id
 * @param {String} id the uuid v4 id of the member
 * @returns {Promise<Record<string, any>>} the member document if found or empty object
 */
export const getMemberById = async (id: string): Promise<Record<string, any>> => {
    logger.info(`Fetch member with id: ${id} from ES`);
    try {
        membersESClient = getMembersESClient();
        const member: Record<string, any> = await membersESClient.get({
            id,
            index: envConfig.MEMBERS_ES.MEMBERS_INDEX,
            type: envConfig.MEMBERS_ES.MEMBERS_DOCUMENT_TYPE,
            refresh: envConfig.MEMBERS_ES.REFRESH as boolean,
        });
        logger.info(`Member with id: ${id} found in ES`);
        return member.body._source;
    } catch (error) {
        logger.error(`Unable to fetch member with id: ${id} from ES`);
        return {};
    }
};

/**
 * Updates the elasticsearch challenge document indentified by id with the provided skills
 * @param {String} id the uuid v4 id of the challenge to update
 * @param {Array<{ id: string; name: string; category: { id: string; name: string } }>} skills the skills to update in the challenge
 */
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

/**
 * Updates the elasticsearch job document indentified by id with the provided skills
 * @param {String} id the uuid v4 id of the gig to update
 * @param {Array<{ id: string; name: string; category: { id: string; name: string } }>} jobSkills the skills to update in the gig
 */
export const updateSkillsInJobES = async (
    id: string,
    jobSkills: { id: string; name: string; category: { id: string; name: string } }[],
) => {
    logger.info(`Update skills in challenge ${id} with skills: ${JSON.stringify(jobSkills)}`);

    jobsESClient = getJobsESClient();
    await jobsESClient.update({
        index: envConfig.JOBS_ES.JOB_INDEX,
        type: envConfig.JOBS_ES.JOB_DOCUMENT_TYPE,
        id,
        body: {
            doc: {
                jobSkills,
            },
        },
    });
    logger.info(`Job ${id} successfully updated with skills`);
};

/**
 * Updates the elasticsearch member profiles indentified by id with the provided skills
 * @param {String} id the uuid v4 id of the member to update
 * @param {Array<{ id: string; name: string; category: { id: string; name: string };
 * levels: {id: string; name: string; description: string}[]}>} skills the skills to update in the member profile
 */
export const updateSkillsInMemberES = async (
    id: string,
    skills: {
        id: string;
        name: string;
        category: { id: string; name: string };
        levels: { id: string; name: string; description: string }[];
    }[],
) => {
    logger.info(`Update skills in member ${id} with skills: ${JSON.stringify(skills)}`);
    membersESClient = getMembersESClient();
    await membersESClient.update({
        id,
        index: envConfig.MEMBERS_ES.MEMBERS_INDEX,
        type: envConfig.MEMBERS_ES.MEMBERS_DOCUMENT_TYPE,
        body: {
            doc: {
                skills,
            },
        },
    });
    logger.info(`Member ${id} successfully updated with skills`);
};

/**
 * Creates the skill in skills autocomplete ES
 * @param {{id: string; name: string; category: { id: string; name: string }; createdAt: string; updatedAt: string;}} skill
 * the skill to be created
 */
export const createSkillInAutocompleteES = async (skill: {
    id: string;
    name: string;
    category: { id: string; name: string };
    createdAt: string;
    updatedAt: string;
}) => {
    logger.info(`Creating skill in skills autocomplete ES ${JSON.stringify(skill)}`);
    skillsESClient = getSkillsESClient();

    // generate the name suggestions on which ES will provide autocomplete feature
    const doc = assign({}, skill, { name_suggest: helper.generateEmsiSkillSuggestionInputs(skill.name) });
    await skillsESClient.create({
        id: skill.id,
        index: envConfig.SKILLS_ES.INDEX,
        body: {
            doc,
        },
        refresh: envConfig.SKILLS_ES.REFRESH as boolean,
    });
    logger.info('Skill created successfully in skills autocomplete ES');
};

/**
 * Updates the skill with the latest information in skills autocomplete ES
 * @param {{id: string; name: string; category: { id: string; name: string }; createdAt: string; updatedAt: string;}} skill
 * the skill to update in skills autocomplete ES
 */
export const updateSkillInAutocompleteES = async (skill: {
    id: string;
    name: string;
    category: { id: string; name: string };
    createdAt: string;
    updatedAt: string;
}) => {
    logger.info(`Updating skill ${skill.id} in skills autocomplete ES as per data ${JSON.stringify(skill)}`);

    skillsESClient = getSkillsESClient();
    const doc = assign({}, skill, { name_suggest: helper.generateEmsiSkillSuggestionInputs(skill.name) });
    await skillsESClient.index({
        id: skill.id,
        index: envConfig.SKILLS_ES.INDEX,
        body: {
            doc,
        },
    });
    logger.info(`Skill ${skill.id} successfully updated in skills autocomplete ES`);
};

/**
 * Updates the category name of affected skills across the skills autocomplete index
 * @param id the uuid id of the category
 * @param name the updated name of the category
 */
export const updateSkillCategoryInAutocompleteES = async (id: string, name: string) => {
    logger.info(`Updating affected skills in skills autocomplete ES with new category name: ${name}`);

    skillsESClient = getSkillsESClient();
    await skillsESClient.updateByQuery({
        index: envConfig.SKILLS_ES.INDEX,
        conflicts: 'proceed',
        type: envConfig.SKILLS_ES.DOCUMENT_TYPE,
        body: {
            query: {
                match_phrase: {
                    'doc.category.id': id,
                },
            },
            script: {
                lang: 'painless',
                source: 'ctx._source.doc.category.name = params.name',
                params: {
                    name: name,
                },
            },
        },
    });
    logger.info('Skills successfully updated with new category in skills autocomplete ES');
};

/**
 * Deletes a skill from the skills autocomplete ES
 * @param {string} id the id of the skill to be deleted
 */
export const deleteSkillFromAutocompleteES = async (id: string) => {
    logger.info(`Deleting skill from autocomplete ES with id ${id}`);

    skillsESClient = getSkillsESClient();
    await skillsESClient.delete({
        id,
        index: envConfig.SKILLS_ES.INDEX,
        refresh: envConfig.SKILLS_ES.REFRESH as boolean,
    });

    logger.info('Successfully delete skill from autocomplete ES with id $id}');
};
