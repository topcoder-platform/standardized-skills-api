import { map, uniq } from 'lodash';
import * as allSkills from './all_skills.json';
import { Skill, SkillCategory } from '../db';
import { Op } from 'sequelize';
import { LoggerClient } from '../utils/LoggerClient';

const logger = new LoggerClient('delete_test-skills');

type allSkill = Array<{
    id: string;
    name: string;
    description: string | null;
    category_id: string;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt: string | null;
}>;

const destroySkillsOutsideOriginal = async () => {
    logger.info('Deleting test skills outside of the original skills');

    const originalSkillIds = map(allSkills as allSkill, (skill) => skill.id);
    logger.info(`The number of original skills in the DB: ${originalSkillIds.length}`);

    let numOfSkills = await Skill.count({
        paranoid: false,
    });
    logger.info(`Total skills present in the DB: ${numOfSkills}`);

    // hard delete skills from the DB as they are test skills
    const deletedSkills = await Skill.destroy({
        where: {
            id: {
                [Op.notIn]: originalSkillIds,
            },
        },
        force: true,
    });
    logger.info(`Number of skills deleted from DB: ${deletedSkills}`);

    numOfSkills = await Skill.count({
        paranoid: false,
    });
    logger.info(`Deletion successful, number of skills left in the DB: ${numOfSkills}`);
};

const destroyCategoriesOutsideOriginal = async () => {
    logger.info('Deleting test categories outside of the original skills');

    const originalCategoryIds = uniq(map(allSkills as allSkill, (skill) => skill.category_id));
    logger.info(`The number of original categories in the DB: ${originalCategoryIds.length}`);

    let numOfCategories = await SkillCategory.count();
    logger.info(`Total categories present in the DB: ${numOfCategories}`);

    // hard delete categories from the DB as they are test categories
    const deletedCategories = await SkillCategory.destroy({
        where: {
            id: {
                [Op.notIn]: originalCategoryIds,
            },
        },
    });
    logger.info(`Number of categories deleted from DB: ${deletedCategories}`);

    numOfCategories = await SkillCategory.count();
    logger.info(`Deletion successful, total categories present in the DB: ${numOfCategories}`);
};

destroySkillsOutsideOriginal()
    .then(() => destroyCategoriesOutsideOriginal())
    .catch(logger.error);
