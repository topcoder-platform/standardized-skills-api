import { Prisma } from '@prisma/client';
import { UserSkillDisplayModes } from '../config';
import { PrismaService } from '../prisma/prisma.service';

type PrismaDisplayModeClient = Prisma.TransactionClient | PrismaService;

/**
 * Fetches the DB entry for the additional user skill type
 */
export async function fetchAdditionalUserSkillDisplayMode(client: PrismaDisplayModeClient) {
    const additionalSkillType = await client.userSkillDisplayMode.findUnique({
        where: { name: UserSkillDisplayModes.additional },
        select: { id: true, name: true },
    });
    if (!additionalSkillType) {
        throw new Error('User skill type \'additional\' not found!');
    }
    return additionalSkillType;
}
