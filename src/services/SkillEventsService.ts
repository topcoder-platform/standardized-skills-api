import { isEmpty, map, toString } from 'lodash';

import { SkillEventChallengeUpdateStatus, SkillEventTopic, UserSkillLevels } from '../config';
import { ChallengeUpdateSkillEventPayload, GetUserSkillsQueryDto, SkilLEventRequestBodyDto } from '../dto';
import { AuthUser } from '../types';
import { ensureUserCanValidateMemberSkills } from '../utils/helpers';
import { getUserSkills } from './UserSkillsService';
import db, { Skill, UserSkill, UserSkillLevel } from '../db';
import { bulkCheckValidIds } from '../utils/postgres-helper';
import { BadRequestError, NotFoundError } from '../utils/errors';
import { LoggerClient } from '../utils/LoggerClient';
import * as esHelper from '../utils/es-helper';

const logger = new LoggerClient('SkillEventsService');

export async function processChallengeCompletedSkillEvent(payload: ChallengeUpdateSkillEventPayload) {
    logger.info(`Handling challenge update skill event using payload ${JSON.stringify(payload)}`);

    if (payload.status !== SkillEventChallengeUpdateStatus.completed) {
        logger.info('Exiting challenge update skill event because status is not \'completed\'');
        return;
    }

    // ensure passesd skill ids are valid
    if (!(await bulkCheckValidIds(Skill, map(payload.skills, 'id')))) {
        throw new BadRequestError('Some of the passed \'skills.id\' are invalid!');
    }

    // fetch the DB id for the verified user skill level
    const verifiedSkillLevel = await UserSkillLevel.findOne({ where: { name: UserSkillLevels.verified } });
    if (!verifiedSkillLevel) {
        throw new Error('User verified skill level not found!');
    }

    // ensure all users in the payload exist
    const membersPromises = payload.winners.map((user) => esHelper.getMemberById(toString(user.userId)));
    const members = await Promise.all(membersPromises);
    const existingMembers = members.map(isEmpty);
    if (existingMembers.length !== payload.winners.length) {
        throw new NotFoundError('Some members have invalid userIds!');
    }

    return db.sequelize.transaction(async () => {
        // update each user with the skills data
        for (const user of payload.winners) {
            const userSkills = payload.skills.map((skill) => ({
                user_id: Number(user.userId),
                skill_id: skill.id,
                user_skill_level_id: verifiedSkillLevel.id,
            }));

            await UserSkill.bulkCreate(userSkills, { ignoreDuplicates: true });

            const allSkills = await getUserSkills(user.userId, {
                ...new GetUserSkillsQueryDto(),
                disablePagination: true,
            });

            await esHelper.updateSkillsInMemberES(toString(user.userId), allSkills.skills);

            return allSkills;
        }

        logger.info('Successfully associated user skills via challenge completed skill event');
    });
}

export function processSkillEvent(currentUser: AuthUser, { topic, payload }: SkilLEventRequestBodyDto) {
    // Ensure skill-events are only executed by admins or machine users
    ensureUserCanValidateMemberSkills(currentUser);

    // handle each event topic differently
    switch (topic) {
        case SkillEventTopic.challengeUpdate:
            return processChallengeCompletedSkillEvent(payload);
        default:
            logger.info(`Skill event with topic ${topic} not handled!`);
    }
}
