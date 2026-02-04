import { BindOrReplacements, QueryTypes } from 'sequelize';

import { CHALLENGE_TYPE_VALUES, CONTEST_SUBMISSION_TYPE, envConfig } from '../config';
import { InternalServerError } from './errors';
import { LoggerClient } from './LoggerClient';
import { buildQualifiedTable, disableSearchPath, formatError } from './sequelize-query.helpers';
import { getReviewsSequelize } from '../db/reviews-db';
import { getChallengeType } from './challenge-db-helper';

const logger = new LoggerClient('ReviewsDbHelper');

const roundScore = (value: number) => Math.round(value * 100) / 100;

const toNumber = (value?: number | string | null) => {
  if (value === null || value === undefined) {
    return null;
  }
  const num = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(num) ? num : null;
};

function assertDbConfig() {
    if (!envConfig.REVIEWS_DB.URL) {
        throw new InternalServerError('REVIEWS_DB_URL must be configured');
    }
}

const buildQualifiedTables = () => {
    return {
        review: buildQualifiedTable( envConfig.REVIEWS_DB.SCHEMA, 'review' ),
        reviewSummation: buildQualifiedTable( envConfig.REVIEWS_DB.SCHEMA, 'reviewSummation' ),
        submission: buildQualifiedTable( envConfig.REVIEWS_DB.SCHEMA, 'submission' ),
        scorecard: buildQualifiedTable( envConfig.REVIEWS_DB.SCHEMA, 'scorecard' ),
    };
};

interface SubmissionResult {
    submissionId: string;
    challengeId: string;
    memberId: string;
    scorecardId: string;
    reviewScore: number;
}

async function _getSubmissions(query: string, replacements: BindOrReplacements): Promise<SubmissionResult[]> {
    assertDbConfig();

    try {
        const sequelize = getReviewsSequelize();
        const records = await sequelize.query<SubmissionResult[]>(
            query,
            {
                replacements,
                type: QueryTypes.SELECT,
                plain: false,
                ...disableSearchPath,
            },
        );

        return records || [];
    } catch (error) {
        logger.error('Unable to fetch submissions');
        logger.error(formatError(error));
        throw new InternalServerError('Unable to fetch submissions! Please retry.');
    }
}

export async function getSubmissionsForChallenge(challengeId: string): Promise<SubmissionResult[]> {
    const tables = buildQualifiedTables();

    return _getSubmissions(`
        SELECT
            s.id AS "submissionId",
            s."challengeId" AS "challengeId",
            s."memberId" AS "memberId",
            MIN(rs."scorecardId") AS "scorecardId",
            AVG(rs."aggregateScore") AS "reviewScore"
        FROM ${tables.submission} s
        INNER JOIN ${tables.reviewSummation} rs ON rs."submissionId" = s.id
        WHERE s."challengeId" = :challengeId
            AND s."type" = '${CONTEST_SUBMISSION_TYPE}'::reviews."SubmissionType"
        GROUP BY s.id, s."challengeId", s."memberId", s."submittedDate", s."createdAt"
    `, { challengeId });
}

export async function loadScorecardMinScores(scorecardIds: string[]) {
    assertDbConfig();
    const tables = buildQualifiedTables();

    try {
        const sequelize = getReviewsSequelize();
        const rows = await sequelize.query<{ [key: string]: unknown }[]>(
            `
                SELECT id, "minimumPassingScore"
                FROM ${tables.scorecard}
                WHERE id IN (:scorecardIds)
            `,
            {
                replacements: { scorecardIds },
                type: QueryTypes.SELECT,
                plain: false,
                ...disableSearchPath,
            },
        );

        return new Map(
            (rows || []).map((row) => [row.id, toNumber(row.minimumPassingScore as number) ?? 0])
        );
    } catch (error) {
        logger.error('Unable to load scorecard minimum scores');
        logger.error(formatError(error));
        throw new InternalServerError('Unable to load scorecard minimum scores! Please retry.');
    }
}

export async function loadPassingSubmissions(challengeId: string, winnersIds: number[]) {
    const challengeType = await getChallengeType(challengeId);
    const isMarathonMatch = challengeType === CHALLENGE_TYPE_VALUES.marathonMatch;
    const isTask = challengeType === CHALLENGE_TYPE_VALUES.task;

    const submissions = await getSubmissionsForChallenge(challengeId);
    const minScoreByScorecard = isTask || isMarathonMatch ? new Map<unknown, number>() : await loadScorecardMinScores(
      submissions.map(s => s.scorecardId),
    );

    return submissions.map((row) => {
      const reviewScoreValue = toNumber(row.reviewScore);
      const reviewScore = reviewScoreValue === null ? null : roundScore(reviewScoreValue);
      const scorecardScore = (isMarathonMatch || isTask)
        ? 0
        : toNumber(minScoreByScorecard.get(row.scorecardId)) ?? 0;
      const isPassing = reviewScore !== null && (isMarathonMatch ? reviewScore > 0 : reviewScore >= scorecardScore);
      return {
        submissionId: row.submissionId,
        challengeId: row.challengeId,
        memberId: row.memberId,
        scorecardId: row.scorecardId,
        reviewScore,
        scorecardScore,
        isPassing,
      };
    }).filter(s => s.isPassing && !winnersIds.includes(Number(s.memberId)));
}
