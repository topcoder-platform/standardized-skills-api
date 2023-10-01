import { LoggerClient } from '../services/LoggerClient';
import * as esHelper from '../utils/es-helper';
import * as postgres from '../utils/postgres-helper';
import * as constants from '../config/constants';
import dayjs from 'dayjs';
import _ from 'lodash';

const logger = new LoggerClient('load-data-es');

const loadSkillDataInES = async () => {
    logger.info('Loading all skill data in ES for autocomplete');
    let page = 1,
        totalPages = 1;
    do {
        const skills = await postgres.findAndCountAllSkills({
            attributes: ['id', 'name'],
            limit: 2000,
            offset: (page - 1) * 2000,
            order: [['name', 'ASC']],
        });

        if (_.isUndefined(skills) || _.isNull(skills) || skills.count === 0) {
            logger.info('No skills present in PostgreSQL DB to be indexed in ES');
            break;
        }

        const skillsToBeIndexed: { id: string; name: string; createdAt: string; updatedAt: string }[] = [];
        _.forEach(skills.rows, (skill) => {
            skillsToBeIndexed.push({
                id: skill.id,
                name: skill.name,
                createdAt: dayjs(skill.created_at).format(constants.ES_SKILL_TIME_FORMAT),
                updatedAt: dayjs(skill.updated_at).format(constants.ES_SKILL_TIME_FORMAT),
            });
        });
        esHelper.bulkCreateSkillsES(skillsToBeIndexed);
        totalPages = Math.ceil(skills.count / 2000);
        page++;
    } while (page <= totalPages);
};

loadSkillDataInES()
    .then(() => {
        logger.info('All skill data indexed in ES for autocomplete');
        process.exit(0);
    })
    .catch((err) => {
        logger.error(`Error encountered: ${JSON.stringify(err)}`);
        process.exit(1);
    });
