/* eslint-disable */
// @ts-nocheck
const dotenv = require('dotenv');
const { resolve, dirname } = require('node:path');
const { promises: fs, createWriteStream } = require('node:fs');
const { QueryTypes, UniqueConstraintError } = require('sequelize');
const { find } = require('lodash');

function getArgValue(flag: string): string | undefined {
    const match = process.argv.find((arg) => arg.startsWith(`${flag}=`));
    if (!match) {
        return undefined;
    }
    return match.split('=').slice(1).join('=');
}

function hasFlag(flag: string): boolean {
    return process.argv.includes(flag) || process.argv.some((arg) => arg.startsWith(`${flag}=`));
}

const envName = getArgValue('--env');
const envFileOverride = getArgValue('--env-file');
const envFileName = envFileOverride
    ? envFileOverride
    : envName
        ? `.env.${envName}`
        : '.env';

dotenv.config({ path: resolve(__dirname, '..', envFileName) });
console.log(`Using env file: ${envFileName}`);

const dbModule = require('../src/db');
const db = dbModule.default ?? dbModule;
const { getChallengeSequelize } = require('../src/db/challenge-db');
const { getResourcesSequelize } = require('../src/db/resources-db');
const {
    CHALLENGE_COPILOT_ROLE,
    CHALLENGE_REVIEWER_ROLES,
    CHALLENGE_TYPE_BY_ID,
    CHALLENGE_TYPE_VALUES,
    SkillEventChallengeUpdateStatus,
    SkillEventTopic,
    SkillEventTypes,
    envConfig,
    WorkType,
} = require('../src/config');
const {
    fetchAllSkillEventTypes,
    getSkillEventType,
    REVIEWER_TYPE_KEY,
    COPILOT_TYPE_KEY,
    FINISHER_TYPE_KEY,
    hashData,
} = require('../src/utils/skill-events-helper');
const { buildQualifiedTable, disableSearchPath } = require('../src/utils/sequelize-query.helpers');
const { fetchSourceType, fetchVerifiedSkillLevel } = require('../src/utils/skills-helper');
const { fetchAdditionalUserSkillDisplayMode } = require('../src/utils/user-skills-helper');

const limit = getArgValue('--limit') ? Number.parseInt(getArgValue('--limit') as string, 10) : undefined;
const offset = getArgValue('--offset') ? Number.parseInt(getArgValue('--offset') as string, 10) : 0;
const batchSize = getArgValue('--batch-size')
    ? Number.parseInt(getArgValue('--batch-size') as string, 10)
    : 100;
const csvMode = hasFlag('--csv');
const includeMarathonMatches = hasFlag('--include-marathon');
const envLabel = envName || process.env.NODE_ENV || 'local';
const outputPath =
    getArgValue('--output') ||
    resolve(__dirname, '..', 'output', `challenge-winner-skill-events.${envLabel}.csv`);

interface WinnerSkillRow {
    challengeId: string;
    userId: number | string;
    handle: string | null;
    placement: number | null;
    type: string | null;
    skillId: string | null;
}

interface ChallengeGroup {
    challengeId: string;
    winners: Map<number, { userId: number; placement?: number | null; type?: string | null }>;
    skills: Set<string>;
}

const csvHeaders = [
    'challengeId',
    'userId',
    'userType',
    'placement',
    'skillId',
    'skillEventTypeName',
    'sourceTypeId',
];

function escapeCsv(value: unknown): string {
    if (value === null || value === undefined) {
        return '';
    }
    const str = String(value);
    if (/[",\n\r]/.test(str)) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}

function toCsvRow(row: Record<string, unknown>): string {
    return csvHeaders.map((key) => escapeCsv(row[key])).join(',');
}

async function createEventIfNotProcessed(
    topic: string,
    payload: unknown,
    eventDate?: string | Date | null,
    transaction?: any,
) {
    const payloadHash = hashData(payload);
    try {
        const eventTable = envConfig.DB_SCHEMA ? buildQualifiedTable(envConfig.DB_SCHEMA, 'event') : '"event"';
        const payloadJson = JSON.stringify(payload ?? null);

        const sql = eventDate
            ? `
                INSERT INTO ${eventTable} ("topic", "payload", "payload_hash", "created_at")
                VALUES (:topic, :payload::jsonb, :payloadHash, :createdAt)
                ON CONFLICT ("payload_hash") DO NOTHING
                RETURNING *
            `
            : `
                INSERT INTO ${eventTable} ("topic", "payload", "payload_hash")
                VALUES (:topic, :payload::jsonb, :payloadHash)
                ON CONFLICT ("payload_hash") DO NOTHING
                RETURNING *
            `;

        const rows = await db.sequelize.query(sql, {
            replacements: {
                topic,
                payload: payloadJson,
                payloadHash,
                createdAt: eventDate,
            },
            type: QueryTypes.SELECT,
            plain: false,
            transaction,
        });

        return rows?.[0] ?? null;
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            return null;
        }
        throw error;
    }
}

async function cleanupSkillEventsForChallenge(
    challengeId: string,
    sourceTypeIds: string[],
    transaction?: any,
) {
    if (sourceTypeIds.length === 0) {
        return;
    }

    const eventTable = envConfig.DB_SCHEMA ? buildQualifiedTable(envConfig.DB_SCHEMA, 'event') : '"event"';
    const skillEventTable = envConfig.DB_SCHEMA
        ? buildQualifiedTable(envConfig.DB_SCHEMA, 'skill_event')
        : '"skill_event"';

    const eventIds = await db.sequelize.query<{ event_id: string }>(
        `
        SELECT DISTINCT "event_id" as event_id
        FROM ${skillEventTable}
        WHERE "source_id" = :challengeId
          AND "source_type_id" IN (:sourceTypeIds)
        `,
        {
            replacements: { challengeId, sourceTypeIds },
            type: QueryTypes.SELECT,
            plain: false,
            transaction,
        },
    );

    if (eventIds && eventIds.length > 0) {
        const ids = eventIds.map((row) => row.event_id).filter(Boolean);
        console.log(
            `Found ${ids.length} events for challengeId=${challengeId} with sourceTypeIds=${sourceTypeIds.join(',')}: ${ids.join(',')} to delete.`,
        );
    }

    await db.sequelize.query(
        `
        DELETE FROM ${skillEventTable}
        WHERE "source_id" = :challengeId
          AND "source_type_id" IN (:sourceTypeIds)
        `,
        {
            replacements: { challengeId, sourceTypeIds },
            type: QueryTypes.DELETE,
            transaction,
        },
    );

    if (eventIds && eventIds.length > 0) {
        const ids = eventIds.map((row) => row.event_id).filter(Boolean);
        if (ids.length > 0) {
            await db.sequelize.query(
                `
                DELETE FROM ${eventTable}
                WHERE "id" IN (:eventIds)
                `,
                {
                    replacements: { eventIds: ids },
                    type: QueryTypes.DELETE,
                    transaction,
                },
            );
        }
    }
}

function buildUserSkills(
    skills: { id: string }[],
    userId: number,
    levelId: string,
    displayModeId: string,
    eventDate?: string | Date | null,
) {
    return skills.map((skill) => ({
        user_id: userId,
        skill_id: skill.id,
        user_skill_level_id: levelId,
        user_skill_display_mode_id: displayModeId,
        ...(eventDate ? { createdAt: eventDate, updatedAt: eventDate } : {}),
    }));
}

function buildSkillEvents(
    skills: { id: string }[],
    userId: number,
    eventId: string,
    sourceId: string,
    sourceTypeId: string,
    skillEventTypeId: string,
    eventDate?: string | Date | null,
) {
    return skills.map((skill) => ({
        event_id: eventId,
        user_id: userId,
        skill_id: skill.id,
        source_id: sourceId,
        source_type_id: sourceTypeId,
        skill_event_type_id: skillEventTypeId,
        ...(eventDate ? { createdAt: eventDate } : {})
    }));
}

async function openCsvWriter(filePath: string) {
    await fs.mkdir(dirname(filePath), { recursive: true });
    const stat = await fs.stat(filePath).catch(() => null);
    const shouldWriteHeader = !stat || stat.size === 0;
    const stream = createWriteStream(filePath, { flags: 'a' });

    if (shouldWriteHeader) {
        stream.write(`${csvHeaders.join(',')}\n`);
    }

    return stream;
}

async function getChallengeEventTypesMap() {
    const allSkillEventTypes = await fetchAllSkillEventTypes();
    return {
        [REVIEWER_TYPE_KEY]: find(allSkillEventTypes, { name: SkillEventTypes.challengeReview }),
        [COPILOT_TYPE_KEY]: find(allSkillEventTypes, { name: SkillEventTypes.challengeCopilot }),
        [FINISHER_TYPE_KEY]: find(allSkillEventTypes, { name: SkillEventTypes.challengeFinisher }),
        '1': find(allSkillEventTypes, { name: SkillEventTypes.challengeWin }),
        '2': find(allSkillEventTypes, { name: SkillEventTypes.challenge2ndPlace }),
        '3': find(allSkillEventTypes, { name: SkillEventTypes.challenge3rdPlace }),
        default: find(allSkillEventTypes, { name: SkillEventTypes.challengeFinisher }),
    };
}

function addRowToGroup(groups: Map<string, ChallengeGroup>, row: WinnerSkillRow) {
    const challengeId = row.challengeId;
    if (!challengeId) {
        return;
    }

    let group = groups.get(challengeId);
    if (!group) {
        group = {
            challengeId,
            winners: new Map(),
            skills: new Set(),
        };
        groups.set(challengeId, group);
    }

    if (row.skillId) {
        group.skills.add(row.skillId);
    }

    if (row.userId !== null && row.userId !== undefined) {
        const numericUserId = Number(row.userId);
        if (Number.isFinite(numericUserId)) {
            const isPassedReview = row.type === 'PASSED_REVIEW';
            const placementValue = isPassedReview
                ? null
                : row.placement !== null && row.placement !== undefined
                    ? Number(row.placement)
                    : null;
            const typeValue = isPassedReview ? FINISHER_TYPE_KEY : null;
            if (placementValue !== null || typeValue) {
                group.winners.set(numericUserId, {
                    userId: numericUserId,
                    placement: placementValue,
                    type: typeValue,
                });
            }
        }
    }
}

async function loadWinnerSkillsBatch(challengeIds: string[]): Promise<Map<string, ChallengeGroup>> {
    if (challengeIds.length === 0) {
        return new Map();
    }

    const challengeSequelize = getChallengeSequelize();
    const rows = await challengeSequelize.query<WinnerSkillRow>(
        `
        SELECT cw."challengeId", cw."userId", cw.handle, cw.placement, cw.type, cs."skillId"
        FROM challenges."ChallengeWinner" as cw
        LEFT JOIN challenges."ChallengeSkill" as cs ON cs."challengeId" = cw."challengeId"
        WHERE cs."skillId" IS NOT NULL
          AND cw."challengeId" IN (:challengeIds)
        ORDER BY cw."challengeId" ASC
        `,
        {
            replacements: { challengeIds },
            type: QueryTypes.SELECT,
            plain: false,
            ...disableSearchPath,
        },
    );

    const groups = new Map<string, ChallengeGroup>();
    for (const row of rows ?? []) {
        addRowToGroup(groups, row);
    }

    return groups;
}

async function loadChallengeIdBatch(batchOffset: number, batchLimit: number): Promise<string[]> {
    const challengeSequelize = getChallengeSequelize();
    const rows = await challengeSequelize.query<{ challengeId: string }>(
        `
        SELECT DISTINCT cw."challengeId" as "challengeId"
        FROM challenges."ChallengeWinner" as cw
        INNER JOIN challenges."ChallengeSkill" as cs ON cs."challengeId" = cw."challengeId"
        WHERE cs."skillId" IS NOT NULL
        ORDER BY cw."challengeId" ASC
        LIMIT :limit OFFSET :offset
        `,
        {
            replacements: { limit: batchLimit, offset: batchOffset },
            type: QueryTypes.SELECT,
            plain: false,
            ...disableSearchPath,
        },
    );

    return (rows ?? []).map((row) => row.challengeId).filter(Boolean);
}

async function loadChallengeInfo(
    challengeIds: string[],
): Promise<Map<string, { type?: string; endDate?: string }>> {
    if (challengeIds.length === 0) {
        return new Map();
    }

    const challengeSequelize = getChallengeSequelize();
    const rows = await challengeSequelize.query<{
        id: string;
        typeId: string;
        endDate: string | null;
        submissionEndDate: string | null;
        registrationEndDate: string | null;
        updatedAt: string | null;
        createdAt: string | null;
    }>(
        `
        SELECT c."id",
               c."typeId",
               c."endDate",
               c."submissionEndDate",
               c."registrationEndDate",
               c."updatedAt",
               c."createdAt"
        FROM challenges."Challenge" as c
        WHERE c."id" IN (:challengeIds)
        `,
        {
            replacements: { challengeIds },
            type: QueryTypes.SELECT,
            plain: false,
            ...disableSearchPath,
        },
    );

    const results = new Map<string, { type?: string; endDate?: string }>();
    for (const row of rows ?? []) {
        const typeValue = row.typeId ? CHALLENGE_TYPE_BY_ID.get(row.typeId) : undefined;
        const resolvedEndDate =
            row.endDate ??
            row.submissionEndDate ??
            row.registrationEndDate ??
            row.updatedAt ??
            row.createdAt ??
            undefined;
        results.set(row.id, { type: typeValue, endDate: resolvedEndDate });
    }
    return results;
}

async function loadResourcesByChallenge(challengeIds: string[], roleIds: string[]) {
    if (challengeIds.length === 0 || roleIds.length === 0) {
        return new Map();
    }

    const resourcesSequelize = getResourcesSequelize();
    const tableName = envConfig.RESOURCES_DB.SCHEMA
        ? buildQualifiedTable(envConfig.RESOURCES_DB.SCHEMA, 'Resource')
        : '"Resource"';

    const rows = await resourcesSequelize.query<{
        challengeId: string;
        memberId: string;
        memberHandle: string;
        roleId: string;
    }>(
        `
        SELECT "challengeId", "memberId", "memberHandle", "roleId"
        FROM ${tableName}
        WHERE "roleId" in (:roleIds) AND "challengeId" IN (:challengeIds)
        `,
        {
            replacements: { challengeIds, roleIds },
            type: QueryTypes.SELECT,
            plain: false,
            ...disableSearchPath,
        },
    );

    const grouped = new Map<string, { memberId: string; memberHandle: string; roleId: string }[]>();
    for (const row of rows ?? []) {
        const list = grouped.get(row.challengeId) ?? [];
        list.push({ memberId: row.memberId, memberHandle: row.memberHandle, roleId: row.roleId });
        grouped.set(row.challengeId, list);
    }

    return grouped;
}

async function countChallengeIds(): Promise<number> {
    const challengeSequelize = getChallengeSequelize();
    const rows = await challengeSequelize.query<{ total: string }>(
        `
        SELECT COUNT(DISTINCT cw."challengeId")::text as total
        FROM challenges."ChallengeWinner" as cw
        INNER JOIN challenges."ChallengeSkill" as cs ON cs."challengeId" = cw."challengeId"
        WHERE cs."skillId" IS NOT NULL
        `,
        {
            type: QueryTypes.SELECT,
            plain: false,
            ...disableSearchPath,
        },
    );

    const totalValue = rows?.[0]?.total;
    return totalValue ? Number(totalValue) : 0;
}

async function run() {
    if (!envConfig.DB_URL) {
        throw new Error('TC_SKILLS_DATABASE_URL must be configured.');
    }

    if (!envConfig.CHALLENGE_DB.URL) {
        throw new Error('CHALLENGE_DB_URL must be configured.');
    }

    if (!envConfig.RESOURCES_DB.URL) {
        throw new Error('RESOURCES_DB_URL must be configured to process reviewers/copilots.');
    }


    let processed = 0;
    let skipped = 0;
    let batchOffset = offset;
    let batchIndex = 0;
    const skippedChallengeIds: string[] = [];

    const verifiedSkillLevel = await fetchVerifiedSkillLevel();
    const additionalSkillType = await fetchAdditionalUserSkillDisplayMode();
    const eventTypesMap = await getChallengeEventTypesMap();
    const challengeSourceType = await fetchSourceType(WorkType.challenge);
    const mmSourceType = await fetchSourceType(WorkType.marathonMatch);
    const stream = csvMode ? await openCsvWriter(outputPath) : null;

    const totalChallenges = await countChallengeIds();
    const totalBatches = batchSize > 0 ? Math.ceil(totalChallenges / batchSize) : 0;
    console.log(`Total challenges to process: ${totalChallenges}. Total batches: ${totalBatches}.`);

    while (true) {
        const challengeIds = await loadChallengeIdBatch(batchOffset, batchSize);
        if (challengeIds.length === 0) {
            break;
        }

        batchIndex += 1;
        console.log(`Loaded batch ${batchIndex} with ${challengeIds.length} challenges (offset ${batchOffset}).`);

        const groups = await loadWinnerSkillsBatch(challengeIds);
        if (groups.size === 0) {
            batchOffset += batchSize;
            continue;
        }

        const challengeInfo = await loadChallengeInfo(challengeIds);
        const reviewersByChallenge = await loadResourcesByChallenge(
            challengeIds,
            Object.values(CHALLENGE_REVIEWER_ROLES),
        );
        const copilotsByChallenge = await loadResourcesByChallenge(challengeIds, [CHALLENGE_COPILOT_ROLE]);

        for (const group of groups.values()) {
            console.log(`Processing challenge ${group.challengeId} (batch ${batchIndex})`);
            const winners = Array.from(group.winners.values());
            const skills = Array.from(group.skills.values()).map((id) => ({ id }));
            console.log(`Winners (${winners.length}): ${winners.map((w) => `${w.userId}:${w.placement}`).join(', ')}`);
            console.log(`Skills (${skills.length})`);

            if (winners.length === 0 || skills.length === 0) {
                skipped += 1;
                skippedChallengeIds.push(group.challengeId);
                continue;
            }

            const info = challengeInfo.get(group.challengeId);
            const eventDate = info?.endDate ?? null;
            const payload = {
                id: group.challengeId,
                status: SkillEventChallengeUpdateStatus.completed,
                winners,
                skills,
                endDate: eventDate,
            };

            const isMarathonMatch = info?.type === CHALLENGE_TYPE_VALUES.marathonMatch;
            const sourceType = isMarathonMatch ? mmSourceType : challengeSourceType;

            const reviewers = reviewersByChallenge.get(group.challengeId) ?? [];
            const copilots = copilotsByChallenge.get(group.challengeId) ?? [];
            console.log(`Reviewers (${reviewers.length}) for challenge ${group.challengeId}`);
            console.log(`Copilots (${copilots.length}) for challenge ${group.challengeId}`);

            let users = [
                ...winners,
                ...reviewers.map((p) => ({
                    userId: Number(p.memberId),
                    type: REVIEWER_TYPE_KEY,
                })),
                ...copilots.map((p) => ({
                    userId: Number(p.memberId),
                    type: COPILOT_TYPE_KEY,
                })),
            ];

            console.log(`Users (${users.length}) for challenge ${group.challengeId}`);

            if (csvMode && stream) {
                for (const user of users) {
                    const eventType = getSkillEventType(eventTypesMap, user.placement ?? user.type ?? '');
                    for (const skill of skills) {
                        const line =
                            toCsvRow({
                                challengeId: group.challengeId,
                                userId: user.userId,
                                userType: user.type ?? '',
                                placement: user.placement ?? '',
                                skillId: skill.id,
                                skillEventTypeName: eventType?.name ?? '',
                                sourceTypeId: sourceType.id,
                            }) + '\n';

                        if (!stream.write(line)) {
                            await new Promise<void>((resolve) => stream.once('drain', resolve));
                        }
                    }
                }
            } else {
                let event = null;
                await db.sequelize.transaction(async (tx) => {
                    // await cleanupSkillEventsForChallenge(
                    //     group.challengeId,
                    //     [challengeSourceType.id, mmSourceType.id],
                    //     tx,
                    // );

                    event = await createEventIfNotProcessed(
                        SkillEventTopic.challengeUpdate,
                        payload,
                        eventDate,
                        tx,
                    );

                    if (!event) {
                        console.log(`Skipping challenge ${group.challengeId}: event already processed (payload hash exists).`);
                        return;
                    }

                    const userSkillRows = [] as Array<{
                        user_id: number;
                        skill_id: string;
                        user_skill_level_id: string;
                        user_skill_display_mode_id: string;
                    }>;
                    const skillEventRows = [] as Array<{
                        event_id: string;
                        user_id: number;
                        skill_id: string;
                        source_id: string;
                        source_type_id: string;
                        skill_event_type_id: string;
                    }>;

                    for (const user of users) {
                        const numericUserId = Number(user.userId);
                        const eventType = getSkillEventType(eventTypesMap, user.placement ?? user.type ?? '');
                        if (!eventType) {
                            throw new Error(`Missing skill event type for user ${numericUserId} in challenge ${group.challengeId}`);
                        }

                        userSkillRows.push(
                            ...buildUserSkills(
                                skills,
                                numericUserId,
                                verifiedSkillLevel.id,
                                additionalSkillType.id,
                                eventDate,
                            ),
                        );

                        skillEventRows.push(
                            ...buildSkillEvents(
                                skills,
                                numericUserId,
                                event.id,
                                group.challengeId,
                                sourceType.id,
                                eventType.id,
                                eventDate,
                            ),
                        );
                    }

                    if (userSkillRows.length > 0) {
                        await db.models.UserSkill.bulkCreate(userSkillRows, { ignoreDuplicates: true, transaction: tx });
                    }

                    if (skillEventRows.length > 0) {
                        await db.models.SkillEvent.bulkCreate(skillEventRows, { ignoreDuplicates: true, transaction: tx });
                    }
                });

                if (!event) {
                    skipped += 1;
                    skippedChallengeIds.push(group.challengeId);
                    continue;
                }
            }

            processed += 1;
            if (limit && processed >= limit) {
                break;
            }
            console.log(`Finished challenge ${group.challengeId}. Processed=${processed}, Skipped=${skipped}`);
        }

        if (limit && processed >= limit) {
            break;
        }

        batchOffset += batchSize;
    }

    if (csvMode && stream) {
        await new Promise<void>((resolve, reject) => {
            stream.end(() => resolve());
            stream.on('error', reject);
        });
        console.log(`CSV mode enabled. Appended ${processed} challenges to ${outputPath}. Skipped ${skipped}.`);
        if (skippedChallengeIds.length > 0) {
            console.log(`Skipped challenge IDs (${skippedChallengeIds.length}): ${skippedChallengeIds.join(', ')}`);
        }
        return;
    }

    console.log(`Done. Processed ${processed} challenges. Skipped ${skipped}.`);
    if (skippedChallengeIds.length > 0) {
        console.log(`Skipped challenge IDs (${skippedChallengeIds.length}): ${skippedChallengeIds.join(', ')}`);
    }
}

run()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(async () => {
        const closers: Promise<unknown>[] = [db.sequelize.close()];
        if (envConfig.CHALLENGE_DB.URL) {
            closers.push(getChallengeSequelize().close());
        }
        if (envConfig.RESOURCES_DB.URL) {
            closers.push(getResourcesSequelize().close());
        }

        await Promise.allSettled(closers);
    });
