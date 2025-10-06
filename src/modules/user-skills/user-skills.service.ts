import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import { GetUserSkillsDisplayModesQueryDto, GetUserSkillsQueryDto, UpdateUserSkillsRequestBodyDto } from '../../dto';
import { BadRequestError, NotFoundError } from '../../utils/errors';
import { ensureUserCanManageMemberSkills, ensureUserHasAdminPrivilege } from '../../utils/helpers';
import { UserSkillLevels } from '../../config';

@Injectable()
export class UserSkillsService {
  private readonly logger = new Logger(UserSkillsService.name);

  constructor(private readonly prisma: PrismaService) {}

  private buildOrderBy(query: GetUserSkillsQueryDto): Prisma.SkillOrderByWithRelationInput[] {
    const order: Prisma.SkillOrderByWithRelationInput[] = [];
    const sortOrder = (query.sortOrder ?? 'ASC').toLowerCase() as 'asc' | 'desc';
    const sortBy = query.sortBy ?? 'name';

    if (sortBy === 'category') {
      order.push({ category: { name: sortOrder } });
      order.push({ name: 'asc' });
      return order;
    }

    // Fallback for unsupported 'level' sorting: secondary by name
    order.push({ name: sortOrder });
    return order;
  }

  async getUserSkills(user: AuthUser, userId: number, query: GetUserSkillsQueryDto) {
    this.logger.log(`Fetching user skills for userId=${userId} query=${JSON.stringify(query)}`);

    ensureUserCanManageMemberSkills(user, userId);

    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

    const where: Prisma.SkillWhereInput = {
      userSkills: {
        some: { userId },
      },
    };

    const orderBy = this.buildOrderBy(query);

    const commonArgs = {
      where,
      orderBy,
      include: {
        category: true,
        userSkills: {
          where: { userId },
          include: {
            userSkillLevel: true,
            userSkillDisplayMode: true,
          },
        },
      },
    } satisfies Prisma.SkillFindManyArgs;

    let skills: Array<
      Prisma.SkillGetPayload<{
        include: {
          category: true;
          userSkills: { include: { userSkillLevel: true; userSkillDisplayMode: true } };
        };
      }>
    > = [];
    let total = 0;

    if (disablePagination) {
      skills = await this.prisma.skill.findMany(commonArgs);
      total = skills.length;
    } else {
      const skip = (query.page - 1) * query.perPage;
      const [queried, count] = await this.prisma.$transaction([
        this.prisma.skill.findMany({ ...commonArgs, skip, take: query.perPage }),
        this.prisma.skill.count({ where }),
      ]);
      skills = queried;
      total = count;
    }

    const serialized = skills.map((skill) => {
      const levels = skill.userSkills.map((us) => ({
        id: us.userSkillLevel.id,
        name: us.userSkillLevel.name,
        description: us.userSkillLevel.description ?? '',
      }));

      const preferred =
        skill.userSkills.find((us) => us.userSkillLevel.name === UserSkillLevels.verified) ??
        skill.userSkills[0];

      return {
        id: skill.id,
        name: skill.name,
        category: skill.category
          ? {
              id: skill.category.id,
              name: skill.category.name,
            }
          : null,
        levels,
        displayMode: preferred
          ? {
              id: preferred.userSkillDisplayMode.id,
              name: preferred.userSkillDisplayMode.name,
            }
          : null,
      };
    });

    if (disablePagination) {
      return { skills: serialized };
    }

    const totalPages = total === 0 ? 0 : Math.ceil(total / query.perPage);

    return {
      skills: serialized,
      page: query.page,
      perPage: query.perPage,
      total,
      totalPages,
    };
  }

  async getUserSkillsDisplayModes(query: GetUserSkillsDisplayModesQueryDto) {
    this.logger.log(`Fetching user skill display modes query=${JSON.stringify(query)}`);

    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';
    const sortOrder = (query.sortOrder ?? 'ASC').toLowerCase() as 'asc' | 'desc';

    const commonArgs = {
      orderBy: { name: sortOrder },
      select: { id: true, name: true },
    } satisfies Prisma.UserSkillDisplayModeFindManyArgs;

    let displayModes: Array<{ id: string; name: string }> = [];
    let total = 0;

    if (disablePagination) {
      displayModes = await this.prisma.userSkillDisplayMode.findMany(commonArgs);
      total = displayModes.length;
    } else {
      const skip = (query.page - 1) * query.perPage;
      const [queried, count] = await this.prisma.$transaction([
        this.prisma.userSkillDisplayMode.findMany({ ...commonArgs, skip, take: query.perPage }),
        this.prisma.userSkillDisplayMode.count(),
      ]);
      displayModes = queried;
      total = count;
    }

    if (disablePagination) {
      return { displayModes };
    }

    const totalPages = total === 0 ? 0 : Math.ceil(total / query.perPage);
    return {
      displayModes,
      page: query.page,
      perPage: query.perPage,
      total,
      totalPages,
    };
  }

  async getUserSkillsDisplayModeByName(name: string) {
    this.logger.log(`Fetching user skill display mode by name='${name}'`);

    const displayMode = await this.prisma.userSkillDisplayMode.findUnique({ where: { name } });
    if (!displayMode) {
      throw new NotFoundError(`DisplayMode with name '${name}' does not exist!`);
    }

    return { id: displayMode.id, name: displayMode.name };
  }

  private async getSelfDeclaredLevelId(): Promise<string> {
    const level = await this.prisma.userSkillLevel.findUnique({ where: { name: UserSkillLevels.selfDeclared } });
    if (!level) {
      throw new Error('User self-declared skill level not found!');
    }
    return level.id;
  }

  private async validateSkillIds(skillIds: string[]): Promise<void> {
    if (skillIds.length === 0) {
      return;
    }
    const unique = Array.from(new Set(skillIds));
    const found = await this.prisma.skill.findMany({ where: { id: { in: unique } }, select: { id: true } });
    if (found.length !== unique.length) {
      throw new BadRequestError("Some of the passed 'skills.id' are invalid!");
    }
  }

  private async updateDisplayModes(userId: number, body: UpdateUserSkillsRequestBodyDto): Promise<void> {
    // Group by displayModeId and update in batches
    const grouped = body.skills.reduce<Record<string, string[]>>((acc, s) => {
      const list = acc[s.displayModeId] ?? [];
      list.push(s.id);
      acc[s.displayModeId] = list;
      return acc;
    }, {});

    const ops = Object.entries(grouped).map(([displayModeId, skillIds]) =>
      this.prisma.userSkill.updateMany({
        where: { userId, skillId: { in: skillIds } },
        data: { userSkillDisplayModeId: displayModeId },
      }),
    );
    if (ops.length) {
      await this.prisma.$transaction(ops);
    }

    // Enforce principal skills cap (max 10)
    const principal = await this.prisma.userSkillDisplayMode.findUnique({ where: { name: 'principal' } });
    if (principal) {
      const principals = await this.prisma.userSkill.findMany({
        where: { userId, userSkillDisplayModeId: principal.id },
        select: { skillId: true },
        distinct: ['skillId'],
      });
      if (principals.length > 10) {
        throw new BadRequestError('Max limit for Principal skills reached!');
      }
    }
  }

  async createUserSkills(user: AuthUser, userId: number, body: UpdateUserSkillsRequestBodyDto) {
    this.logger.log(`Creating user skills for userId=${userId}`);
    ensureUserCanManageMemberSkills(user, userId);

    const existing = await this.prisma.userSkill.findFirst({ where: { userId } });
    if (existing) {
      throw new BadRequestError(`Member:${userId} already has skills associated with it`);
    }

    const selfDeclaredId = await this.getSelfDeclaredLevelId();

    // Only admins/m2m can set non-self-declared level
    if (body.skills.some((s) => s.levelId && s.levelId !== selfDeclaredId)) {
      ensureUserHasAdminPrivilege(user);
    }

    await this.validateSkillIds(body.skills.map((s) => s.id));

    await this.prisma.$transaction(async (tx) => {
      const toCreate = body.skills.map((s) => ({
        userId,
        skillId: s.id,
        userSkillLevelId: s.levelId ?? selfDeclaredId,
        userSkillDisplayModeId: s.displayModeId,
      }));

      if (toCreate.length) {
        await tx.userSkill.createMany({ data: toCreate, skipDuplicates: true });
      }

      // After create, normalize display modes and enforce cap
      await this.updateDisplayModes(userId, body);
    });

    return this.getUserSkills(user, userId, { disablePagination: 'true' } as any);
  }

  async updateUserSkills(user: AuthUser, userId: number, body: UpdateUserSkillsRequestBodyDto) {
    this.logger.log(`Updating user skills for userId=${userId}`);
    ensureUserCanManageMemberSkills(user, userId);

    const hasAny = await this.prisma.userSkill.findFirst({ where: { userId } });
    if (!hasAny) {
      throw new NotFoundError(`Member:${userId} association does not exist`);
    }

    const selfDeclaredId = await this.getSelfDeclaredLevelId();

    // Only admins/m2m can set non-self-declared level
    if (body.skills.some((s) => s.levelId && s.levelId !== selfDeclaredId)) {
      ensureUserHasAdminPrivilege(user);
    }

    await this.validateSkillIds(body.skills.map((s) => s.id));

    await this.prisma.$transaction(async (tx) => {
      const ids = body.skills.map((s) => s.id);

      // Remove self-declared skills that are no longer present
      await tx.userSkill.deleteMany({
        where: {
          userId,
          skillId: { notIn: ids },
          userSkillLevel: { name: UserSkillLevels.selfDeclared },
        },
      });

      // Ensure existence of pairs for incoming skills
      const toCreate = body.skills.map((s) => ({
        userId,
        skillId: s.id,
        userSkillLevelId: s.levelId ?? selfDeclaredId,
        userSkillDisplayModeId: s.displayModeId,
      }));
      if (toCreate.length) {
        await tx.userSkill.createMany({ data: toCreate, skipDuplicates: true });
      }

      // Normalize display modes and enforce cap
      await this.updateDisplayModes(userId, body);
    });

    return this.getUserSkills(user, userId, { disablePagination: 'true' } as any);
  }
}
