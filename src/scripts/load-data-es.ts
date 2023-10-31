import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';
import * as constants from '../config/constants';
import dayjs from 'dayjs';
import _ from 'lodash';
import db, { Skill } from '../db';

const logger = new LoggerClient('load-data-es');

const loadSkillDataInES = async () => {
    logger.info('Loading all skill data in Elasticsearch index for autocomplete');
    let page = 0,
        totalPages = 1,
        skills: { rows: Skill[]; count: number };
    do {
        skills = await Skill.findAndCountAll({
            attributes: ['id', 'name'],
            include: {
                model: db.models.SkillCategory,
                as: 'category',
                attributes: ['id', 'name'],
            },
            limit: 2000,
            offset: page * 2000,
            order: [['name', 'ASC']],
        });

        if (_.isUndefined(skills) || _.isNull(skills) || skills.count === 0) {
            logger.info('No skills present in PostgreSQL DB to be indexed in ES');
            break;
        }

        const skillsToBeIndexed: {
            id: string;
            name: string;
            category: { id: string; name: string };
            createdAt: string;
            updatedAt: string;
        }[] = [];
        _.forEach(skills.rows, (skill) => {
            skillsToBeIndexed.push({
                id: skill.id,
                name: skill.name,
                category: {
                    id: skill.category.id,
                    name: skill.category.name,
                },
                createdAt: dayjs(skill.created_at).format(constants.ES_SKILL_TIME_FORMAT),
                updatedAt: dayjs(skill.updated_at).format(constants.ES_SKILL_TIME_FORMAT),
            });
        });
        if (skillsToBeIndexed.length > 0) {
            esHelper.bulkCreateSkillsES(skillsToBeIndexed);
        }
        totalPages = Math.ceil(skills.count / 2000);
        page++;
    } while (page <= totalPages);

    // wait 8 seconds before calling the count on Elasticsearch as the index takes time to sync
    await new Promise((resolve) => setTimeout(resolve, 8000));

    logger.info(`Skills available in PostgreSQL ${skills.count}`);
    logger.info(
        `Skills available in Elasticsearch index skills_autocomplete_suggester: ${await esHelper.countSkillsInAutocompleteES()}`,
    );
};

loadSkillDataInES()
    .then(() => {
        logger.info('All skill data indexed in Elasticsearch index for autocomplete');
        process.exit(0);
    })
    .catch((err) => {
        logger.error(`Error encountered: ${JSON.stringify(err)}`);
        process.exit(1);
    });
