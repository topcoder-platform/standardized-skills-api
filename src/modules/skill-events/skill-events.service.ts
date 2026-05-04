import { Injectable, Logger } from '@nestjs/common';

import { SkillEventChallengeUpdateStatus, SkillEventTopic, SkillEventTypes, WorkType } from '../../config';
import {
    SkillEventPayloadChallengeUpdate,
    SkillEventPayloadEngagementMemberAssigned,
    SkillEventPayloadTCAUpdate,
    SkillEventRequestBodyDto,
    UserSkillDto,
} from '../../dto';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import { PrismaService } from '../../prisma/prisma.service';
import { ensureUserHasAdminPrivilege } from '../../utils/helpers';
import { bulkCheckValidIdsWithPrisma } from '../../utils/postgres-helper';
import { NotFoundError } from '../../utils/errors';
import { fetchSourceType, fetchVerifiedSkillLevel } from '../../utils/skills-helper';
import {
    COPILOT_TYPE_KEY,
    FINISHER_TYPE_KEY,
    REVIEWER_TYPE_KEY,
    createAndEnsureEventNotProcessedAlready,
    createSkillEventsForUser,
    ensureMembersExist,
    ensurePayloadChallengeExists,
    ensurePayloadWinnersAreValidUsers,
} from '../../utils/skill-events-helper';
import { fetchAdditionalUserSkillDisplayMode } from '../../utils/user-skills-helper';
import { fetchCopilotsForChallenge, fetchReviewersForChallenge } from '../../utils/resource-db-helper';
import { loadPassingSubmissions } from '../../utils/reviews-db-helper';
import { checkIsMarathonMatch } from '../../utils/challenge-db-helper';

type ChallengeResource = {
    memberId: string;
    memberHandle: string;
    roleId: string;
};

@Injectable()
export class SkillEventsService {
    private readonly logger = new Logger(SkillEventsService.name);

    constructor(private readonly prisma: PrismaService) {}

    async processSkillEvent(currentUser: AuthUser, { topic, payload }: SkillEventRequestBodyDto) {
        ensureUserHasAdminPrivilege(currentUser);

        const event = await createAndEnsureEventNotProcessedAlready(topic, payload, this.prisma);

        switch (topic) {
            case SkillEventTopic.challengeUpdate:
                return this.processChallengeCompletedSkillEvent(event.id, payload as SkillEventPayloadChallengeUpdate);
            case SkillEventTopic.tcaUpdate:
                return this.processTCACompletedSkillEvent(event.id, payload as SkillEventPayloadTCAUpdate);
            case SkillEventTopic.engagementMemberAssigned:
                return this.processEngagementMemberAssignedSkillEvent(
                    event.id,
                    payload as SkillEventPayloadEngagementMemberAssigned,
                );
            default:
                this.logger.log(`Skill event with topic ${topic} not handled!`);
        }
    }

    private async processChallengeCompletedSkillEvent(eventId: string, payload: SkillEventPayloadChallengeUpdate) {
        this.logger.log(`Handling challenge update skill event using payload ${JSON.stringify(payload)}`);

        if (payload.status !== SkillEventChallengeUpdateStatus.completed) {
            this.logger.log('Exiting challenge update skill event because status is not \'completed\'');
            return;
        }

        await ensurePayloadChallengeExists(payload.id);
        await this.checkSkillIds(payload.skills);
        await ensurePayloadWinnersAreValidUsers(payload.winners);

        const isMarathonMatch = await checkIsMarathonMatch(payload.id);
        const sourceType = await fetchSourceType(
            isMarathonMatch ? WorkType.marathonMatch : WorkType.challenge,
            this.prisma,
        );
        const verifiedSkillLevel = await fetchVerifiedSkillLevel(this.prisma);
        const additionalSkillType = await fetchAdditionalUserSkillDisplayMode(this.prisma);

        const reviewers = (await fetchReviewersForChallenge(payload.id)) as ChallengeResource[];
        await ensureMembersExist(reviewers.map((reviewer) => reviewer.memberId));
        this.logger.log(
            `Found ${reviewers.length} reviewers [${reviewers.map((reviewer) => reviewer.memberId).join(',')}] associated for challenge ${payload.id}.`,
        );

        const copilots = (await fetchCopilotsForChallenge(payload.id)) as ChallengeResource[];
        await ensureMembersExist(copilots.map((copilot) => copilot.memberId));
        this.logger.log(
            `Found ${copilots.length} copilots [${copilots.map((copilot) => copilot.memberId).join(',')}] associated for challenge ${payload.id}.`,
        );

        const winnersIds = payload.winners.map((winner) => Number(winner.userId));
        const passingSubmissions = await loadPassingSubmissions(payload.id, winnersIds);
        await ensureMembersExist(passingSubmissions.map((submission) => submission.memberId));

        await this.prisma.$transaction(async (tx) => {
            const users = [
                ...payload.winners,
                ...reviewers.map((reviewer) => ({
                    userId: Number(reviewer.memberId),
                    type: REVIEWER_TYPE_KEY,
                })),
                ...copilots.map((copilot) => ({
                    userId: Number(copilot.memberId),
                    type: COPILOT_TYPE_KEY,
                })),
                ...passingSubmissions.map((submission) => ({
                    userId: Number(submission.memberId),
                    type: FINISHER_TYPE_KEY,
                })),
            ];

            for (const user of users) {
                await tx.userSkill.createMany({
                    data: this.prepareUserSkillsUpdate(
                        payload.skills,
                        Number(user.userId),
                        verifiedSkillLevel.id,
                        additionalSkillType.id,
                    ),
                    skipDuplicates: true,
                });

                await createSkillEventsForUser(user, payload.skills, eventId, payload.id, sourceType.id, tx);
            }
        });

        this.logger.log('Successfully associated user skills via challenge completed skill event');
    }

    private async processTCACompletedSkillEvent(eventId: string, payload: SkillEventPayloadTCAUpdate) {
        this.logger.log(`Handling TCA completed skill event using payload ${JSON.stringify(payload)}`);

        await this.checkSkillIds(payload.skills);
        await ensurePayloadWinnersAreValidUsers([payload.graduate]);

        const sourceType = await fetchSourceType(payload.type, this.prisma);
        const verifiedSkillLevel = await fetchVerifiedSkillLevel(this.prisma);
        const additionalSkillType = await fetchAdditionalUserSkillDisplayMode(this.prisma);
        const eventType =
            payload.type === WorkType.certification
                ? SkillEventTypes.tcaCertCompleted
                : SkillEventTypes.tcaCourseCompleted;

        await this.prisma.$transaction(async (tx) => {
            const user = payload.graduate;

            await tx.userSkill.createMany({
                data: this.prepareUserSkillsUpdate(
                    payload.skills,
                    Number(user.userId),
                    verifiedSkillLevel.id,
                    additionalSkillType.id,
                ),
                skipDuplicates: true,
            });

            await createSkillEventsForUser(user, payload.skills, eventId, payload.id, sourceType.id, tx, eventType);
        });

        this.logger.log('Successfully associated user skills via TCA completed skill event');
    }

    private async processEngagementMemberAssignedSkillEvent(
        eventId: string,
        payload: SkillEventPayloadEngagementMemberAssigned,
    ) {
        this.logger.log(`Handling engagement member assigned skill event using payload ${JSON.stringify(payload)}`);

        if (!Array.isArray(payload.skills) || payload.skills.length === 0) {
            this.logger.log('Exiting engagement member assigned skill event because no skills were provided');
            return;
        }

        await this.checkSkillIds(payload.skills);
        await ensureMembersExist([payload.memberId]);

        const sourceType = await fetchSourceType(WorkType.engagement, this.prisma);
        const verifiedSkillLevel = await fetchVerifiedSkillLevel(this.prisma);
        const additionalSkillType = await fetchAdditionalUserSkillDisplayMode(this.prisma);

        await this.prisma.$transaction(async (tx) => {
            await tx.userSkill.createMany({
                data: this.prepareUserSkillsUpdate(
                    payload.skills,
                    Number(payload.memberId),
                    verifiedSkillLevel.id,
                    additionalSkillType.id,
                ),
                skipDuplicates: true,
            });

            this.logger.log(`Creating engagement skill event: ${sourceType.id}, ${JSON.stringify(payload.skills)}`);
            await createSkillEventsForUser(
                { userId: payload.memberId },
                payload.skills,
                eventId,
                payload.assignmentId,
                sourceType.id,
                tx,
                SkillEventTypes.engagementAssignment,
            );
        });

        this.logger.log('Successfully associated user skills via engagement member assigned skill event');
    }

    private async checkSkillIds(skills: UserSkillDto[]) {
        if (!(await bulkCheckValidIdsWithPrisma(this.prisma, 'skill', skills.map((skill) => skill.id)))) {
            throw new NotFoundError('Some of the passed \'skills.id\' don\'t exist!');
        }
    }

    private prepareUserSkillsUpdate(
        skills: UserSkillDto[],
        userId: number,
        userSkillLevelId: string,
        userSkillDisplayModeId: string,
    ) {
        return skills.map((skill) => ({
            userId,
            skillId: skill.id,
            userSkillLevelId,
            userSkillDisplayModeId,
        }));
    }
}
