import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';
import { CHALLENGE_API_VERSION } from '../../config';
import { InternalServerError, NotFoundError, StandardizedSkillApiError } from '../../utils/errors';
import * as errorHelper from '../../utils/error-helper';
import * as tcAPI from '../../utils/tc-api';
import { syncChallengeSkillsInChallengeDb } from '../../utils/challenge-skill-sync';
import { ensureChallengeExists } from '../../utils/challenge-db-helper';

type WorkTypeName = 'gig' | 'challenge';

@Injectable()
export class WorkSkillsService {
    private readonly logger = new Logger(WorkSkillsService.name);

    constructor(private readonly prisma: PrismaService) {}

    async createJobSkills(jobId: string, skillIds: string[]) {
        this.logger.log(
            `Associating skills to job/gig with id ${jobId} based on the following skills data: ${JSON.stringify(skillIds)}`,
        );

        await this.prisma.$transaction(async (tx) => {
            await this.validateRequestForWorkType('gig', jobId, skillIds);
            const workType = await this.findWorkType(tx, 'gig');
            await this.associateSkillsToWorkId(tx, jobId, workType.id, skillIds);
        });

        this.logger.log(`Successfully associated skills to job with id ${jobId}`);
    }

    async createChallengeSkills(userToken: string | undefined, challengeId: string, skillIds: string[]) {
        this.logger.log(
            `Associating skills to challenge with id ${challengeId} based on the following skills data: ${JSON.stringify(skillIds)}`,
        );

        const logContext = `challengeId=${challengeId} skillCount=${skillIds.length}`;
        let currentStep = 'initializing';

        try {
            const associatedSkills = await this.prisma.$transaction(async (tx) => {
                currentStep = 'validateRequestForWorkType';
                this.logger.log(`Validating challenge request for ${logContext}`);
                await this.validateRequestForWorkType('challenge', challengeId, skillIds);

                currentStep = 'findWorkType';
                this.logger.log(`Fetching work type metadata for ${logContext}`);
                const workType = await this.findWorkType(tx, 'challenge');

                currentStep = 'associateSkillsToWorkId';
                this.logger.log(`Associating skills in PostgreSQL for ${logContext}`);
                await this.associateSkillsToWorkId(tx, challengeId, workType.id, skillIds);

                currentStep = 'loadAssociatedSkills';
                this.logger.log(`Fetching associated skill records for ${logContext}`);
                const skills = await tx.skill.findMany({
                    where: { id: { in: [...new Set(skillIds)] } },
                    select: {
                        id: true,
                        name: true,
                        category: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                });
                this.logger.log(`Fetched ${skills.length} associated skill records for ${logContext}`);
                return skills;
            });

            currentStep = 'syncChallengeDb';
            this.logger.log(`Syncing challenge database records for ${logContext}`);
            let challengeDbSyncSucceeded = false;
            try {
                await syncChallengeSkillsInChallengeDb(challengeId, skillIds);
                challengeDbSyncSucceeded = true;
            } catch (error: unknown) {
                this.logger.error(`Error syncing challenge skills in database for ${logContext}`);
                this.logger.error(this.serializeError(error));
            }

            currentStep = 'patchChallengeApi';
            this.logger.log(`Updating challenge API for ${logContext}`);
            let challengeApiPatchSucceeded = false;
            let challengeApiPatchError: any = null;
            try {
                await tcAPI.patch(`/challenges/${challengeId}`, { skills: associatedSkills }, userToken, {
                    'app-version': CHALLENGE_API_VERSION,
                });
                challengeApiPatchSucceeded = true;
            } catch (error: any) {
                challengeApiPatchError = error;
                this.logger.error(`Error encountered in associating skills to challenge with id ${challengeId}`);
                this.logger.error(this.serializeError(error));
            }

            currentStep = 'finalize';
            if (!challengeDbSyncSucceeded && !challengeApiPatchSucceeded) {
                if (challengeApiPatchError) {
                    errorHelper.handleAndTransformAPIError(
                        challengeApiPatchError.status,
                        challengeApiPatchError.response?.text
                            ? JSON.parse(challengeApiPatchError.response.text).message
                            : challengeApiPatchError.message,
                        'Unable to associate skills to challenge! Please retry.',
                    );
                }

                throw new InternalServerError('Unable to associate skills to challenge! Please retry.');
            }

            if (challengeDbSyncSucceeded && challengeApiPatchSucceeded) {
                this.logger.log(`Successfully associated skills to challenge with id ${challengeId}`);
            } else if (challengeDbSyncSucceeded) {
                this.logger.log(
                    `Successfully synced challenge skills in database for challenge ${challengeId}; challenge API update failed but continuing.`,
                );
            } else {
                this.logger.log(
                    `Successfully updated challenge ${challengeId} via challenge API; challenge database sync failed but continuing.`,
                );
            }
        } catch (error: unknown) {
            this.logger.error(`Error while associating skills to challenge at step '${currentStep}' for ${logContext}`);
            this.logger.error(this.serializeError(error));

            if (error instanceof StandardizedSkillApiError) {
                throw error;
            }

            throw new InternalServerError('Unable to associate skills to challenge! Please retry.');
        }
    }

    private async validateRequestForWorkType(workType: WorkTypeName, workId: string, skillIds: string[]) {
        this.logger.log(
            `Validating request for work type ${workType} with id ${workId} and skillIds ${JSON.stringify(skillIds)}`,
        );

        switch (workType) {
            case 'gig':
                try {
                    const response = (await tcAPI.get(`/jobs/${workId}`)).body;
                    this.logger.log(`response from taas-api for job ${workId}: ${JSON.stringify(response)}`);
                } catch (error: any) {
                    errorHelper.handleAndTransformAPIError(
                        error.status,
                        error.response?.text ? JSON.parse(error.response.text).message : error.message,
                        'Unable to associate skills to job! Please retry.',
                    );
                }
                break;

            case 'challenge':
                await ensureChallengeExists(workId);
                break;
        }

        await this.validateSkillIds(skillIds);
    }

    private async validateSkillIds(skillIds: string[]) {
        if (skillIds.length === 0) {
            return;
        }

        const uniqueSkillIds = [...new Set(skillIds)];
        const foundSkills = await this.prisma.skill.findMany({
            where: { id: { in: uniqueSkillIds } },
            select: { id: true },
        });

        if (foundSkills.length !== uniqueSkillIds.length) {
            throw new NotFoundError('Skill(s) to be associated do not exist!');
        }
    }

    private async findWorkType(tx: Prisma.TransactionClient, workType: WorkTypeName) {
        const workTypeDetail = await tx.sourceType.findUnique({
            where: { name: workType },
            select: { id: true, name: true },
        });

        if (!workTypeDetail) {
            throw new InternalServerError(`Unable to fetch work type id for ${workType}!`);
        }

        return workTypeDetail;
    }

    private async associateSkillsToWorkId(
        tx: Prisma.TransactionClient,
        workId: string,
        workTypeId: string,
        skillIds: string[],
    ) {
        await tx.workSkill.deleteMany({
            where: {
                workId,
                workTypeId,
            },
        });

        const uniqueSkillIds = [...new Set(skillIds)];
        if (!uniqueSkillIds.length) {
            return;
        }

        await tx.workSkill.createMany({
            data: uniqueSkillIds.map((skillId) => ({
                workId,
                workTypeId,
                skillId,
            })),
        });
    }

    private serializeError(error: unknown): string {
        if (!error) {
            return 'Unknown error';
        }

        try {
            return JSON.stringify(error, Object.getOwnPropertyNames(error));
        } catch (serializationError: any) {
            const message = serializationError?.message || serializationError;
            const fallback = error instanceof Error ? error.message : String(error);
            return `Failed to serialize error due to: ${message}. Fallback message: ${fallback}`;
        }
    }
}
