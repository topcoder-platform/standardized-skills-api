import { envConfig } from '../config';
import { ExternalPrismaClient } from './external-prisma-client';

let memberPrisma: ExternalPrismaClient | null = null;

export function getMemberPrisma(): ExternalPrismaClient {
    if (!envConfig.MEMBER_DB.URL) {
        throw new Error('MEMBER_DB_URL is not configured');
    }

    if (!memberPrisma) {
        memberPrisma = new ExternalPrismaClient('MemberExternalDb', envConfig.MEMBER_DB.URL);
    }

    return memberPrisma;
}
