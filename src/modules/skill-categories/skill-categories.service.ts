import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import {
  AllCategoriesRequestQueryDto,
  GetCategorySkillsRequestQueryDto,
  NewCategoryRequestBodyDto,
  UpdateCategoryPartialRequestDto,
  UpdateCategoryRequestBodyDto,
} from '../../dto';
import { BadRequestError, ConflictError, NotFoundError } from '../../utils/errors';

type SkillWithCategory = Prisma.SkillGetPayload<{
  include: { category: true };
}>;

@Injectable()
export class SkillCategoriesService {
  private readonly logger = new Logger(SkillCategoriesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getCategoryById(categoryId: string) {
    this.logger.log(`Retrieve category with id ${categoryId}`);

    const category = await this.prisma.skillCategory.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new NotFoundError(`Category with id ${categoryId} does not exist!`);
    }

    return this.serializeCategory(category);
  }

  async getAllCategories(query: AllCategoriesRequestQueryDto) {
    this.logger.log(`Fetching all categories with query: ${JSON.stringify(query)}`);

    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

    const where: Prisma.SkillCategoryWhereInput = {};
    if (query.name) {
      where.name = {
        contains: query.name,
        mode: 'insensitive',
      };
    }

    const orderBy = this.buildOrderBy(query.sortBy, query.sortOrder);

    const commonArgs: Prisma.SkillCategoryFindManyArgs = {
      where,
      orderBy,
    };

    let categories = [];
    let total = 0;

    if (disablePagination) {
      categories = await this.prisma.skillCategory.findMany(commonArgs);
      total = categories.length;
    } else {
      const skip = (query.page - 1) * query.perPage;
      [categories, total] = await this.prisma.$transaction([
        this.prisma.skillCategory.findMany({
          ...commonArgs,
          skip,
          take: query.perPage,
        }),
        this.prisma.skillCategory.count({ where }),
      ]);
    }

    const serialized = categories.map((category) => this.serializeCategory(category));

    if (disablePagination) {
      return {
        categories: serialized,
      };
    }

    const totalPages = total === 0 ? 0 : Math.ceil(total / query.perPage);

    return {
      categories: serialized,
      page: query.page,
      perPage: query.perPage,
      total,
      totalPages,
    };
  }

  async getCategorySkills(categoryId: string, query: GetCategorySkillsRequestQueryDto) {
    this.logger.log(`Fetching all skills belonging to category ${categoryId}`);

    const categoryExists = await this.categoryIdExists(categoryId);
    if (!categoryExists) {
      throw new NotFoundError(`Category with id ${categoryId} does not exist!`);
    }

    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

    const orderBy = this.buildSkillOrderBy(query.sortBy, query.sortOrder);

    const where: Prisma.SkillWhereInput = {
      categoryId,
      deletedAt: null,
    };

    const commonArgs = {
      where,
      orderBy,
      include: {
        category: true,
      },
    };

    let skills: SkillWithCategory[] = [];
    let total = 0;

    if (disablePagination) {
      skills = await this.prisma.skill.findMany(commonArgs);
      total = skills.length;
    } else {
      const skip = (query.page - 1) * query.perPage;
      const [queriedSkills, count] = await this.prisma.$transaction([
        this.prisma.skill.findMany({
          ...commonArgs,
          skip,
          take: query.perPage,
        }),
        this.prisma.skill.count({ where }),
      ]);
      skills = queriedSkills;
      total = count;
    }

    const serialized = skills.map((skill) => ({
      id: skill.id,
      name: skill.name,
      description: skill.description ?? undefined,
      category: skill.category
        ? {
            id: skill.category.id,
            name: skill.category.name,
            description: skill.category.description ?? undefined,
          }
        : null,
    }));

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

  async createNewCategory(_user: AuthUser, body: NewCategoryRequestBodyDto) {
    this.logger.log(`Creating new category as per data ${JSON.stringify(body)}`);

    return this.prisma.$transaction(async (tx) => {
      if (!(await this.categoryNameIsUnique(tx, body.name))) {
        throw new ConflictError(`Category with name ${body.name} already exists!`);
      }

      const category = await tx.skillCategory.create({
        data: {
          name: body.name,
          description: body.description,
        },
      });

      this.logger.log(`New category successfully created ${JSON.stringify({ id: category.id })}`);
      return this.serializeCategory(category);
    });
  }

  async bulkAssignSkillsToCategories(_user: AuthUser, categoryId: string, skillIds: string[]) {
    this.logger.log(`Assigning skills ${JSON.stringify(skillIds)} to category ${categoryId}`);

    return this.prisma.$transaction(async (tx) => {
      const category = await tx.skillCategory.findUnique({ where: { id: categoryId } });
      if (!category) {
        throw new NotFoundError(`Category with id ${categoryId} does not exist`);
      }

      const skills = await tx.skill.findMany({
        where: {
          id: { in: skillIds },
          deletedAt: null,
        },
      });

      if (skills.length !== skillIds.length) {
        throw new NotFoundError('Not all skill ids exist!');
      }

      await tx.skill.updateMany({
        where: {
          id: { in: skillIds },
        },
        data: {
          categoryId,
        },
      });

      const updatedSkills = await tx.skill.findMany({
        where: {
          id: { in: skillIds },
        },
        include: {
          category: true,
        },
      });

      this.logger.log(`Successfully assigned skills to new category ${categoryId}`);

      return updatedSkills.map((skill) => ({
        id: skill.id,
        name: skill.name,
        description: skill.description ?? undefined,
        category: skill.category
          ? {
              id: skill.category.id,
              name: skill.category.name,
              description: skill.category.description ?? undefined,
            }
          : null,
      }));
    });
  }

  async updateCategory(_user: AuthUser, id: string, body: UpdateCategoryRequestBodyDto) {
    this.logger.log(`Updating category ${id} with data ${JSON.stringify(body)}`);

    return this.prisma.$transaction(async (tx) => {
      if (!(await this.categoryIdExistsWithClient(tx, id))) {
        throw new NotFoundError(`Category with id ${id} does not exist!`);
      }

      if (!(await this.categoryNameIsUnique(tx, body.name, id))) {
        throw new ConflictError(`Category with name ${body.name} already exists!`);
      }

      const category = await tx.skillCategory.update({
        where: { id },
        data: {
          name: body.name,
          description: body.description,
        },
      });

      this.logger.log(`Category ${id} updated successfully`);
      return this.serializeCategory(category);
    });
  }

  async patchCategory(_user: AuthUser, id: string, body: UpdateCategoryPartialRequestDto) {
    this.logger.log(`Updating category ${id} with data ${JSON.stringify(body)}`);

    if (!body.name && body.description === undefined) {
      throw new BadRequestError('No data provided for category update');
    }

    return this.prisma.$transaction(async (tx) => {
      if (!(await this.categoryIdExistsWithClient(tx, id))) {
        throw new NotFoundError(`Category with id ${id} does not exist!`);
      }

      if (body.name && !(await this.categoryNameIsUnique(tx, body.name, id))) {
        throw new ConflictError(`Category with name ${body.name} already exists!`);
      }

      const category = await tx.skillCategory.update({
        where: { id },
        data: {
          name: body.name ?? undefined,
          description: body.description ?? undefined,
        },
      });

      this.logger.log(`Category ${id} updated successfully`);
      return this.serializeCategory(category);
    });
  }

  async deleteCategory(_user: AuthUser, id: string): Promise<void> {
    this.logger.log(`Deleting category with id ${id}`);

    await this.prisma.$transaction(async (tx) => {
      if (!(await this.categoryIdExistsWithClient(tx, id))) {
        throw new NotFoundError(`Category with id ${id} does not exist!`);
      }

      const associatedSkills = await tx.skill.count({
        where: {
          categoryId: id,
        },
      });

      if (associatedSkills > 0) {
        throw new BadRequestError(`Cannot delete category with id ${id} as it has skills associated with it!`);
      }

      await tx.skillCategory.delete({
        where: { id },
      });

      this.logger.log(`Category with ${id} deleted successfully`);
    });
  }

  private buildOrderBy(sortBy?: string, sortOrder?: 'ASC' | 'DESC') {
    if (!sortBy) {
      return undefined;
    }

    const mapping: Record<string, keyof Prisma.SkillCategoryOrderByWithRelationInput> = {
      name: 'name',
      description: 'description',
      created_at: 'createdAt',
      updated_at: 'updatedAt',
    };

    const field = mapping[sortBy];
    if (!field) {
      return undefined;
    }

    const direction = sortOrder === 'DESC' ? 'desc' : 'asc';
    return [{ [field]: direction } as Prisma.SkillCategoryOrderByWithRelationInput];
  }

  private buildSkillOrderBy(sortBy?: string, sortOrder?: 'ASC' | 'DESC') {
    if (!sortBy) {
      return undefined;
    }
    const mapping: Record<string, keyof Prisma.SkillOrderByWithRelationInput> = {
      name: 'name',
      description: 'description',
      created_at: 'createdAt',
      updated_at: 'updatedAt',
    };
    const field = mapping[sortBy];
    if (!field) {
      return undefined;
    }
    const direction = sortOrder === 'DESC' ? 'desc' : 'asc';
    return [{ [field]: direction } as Prisma.SkillOrderByWithRelationInput];
  }

  private serializeCategory(category: { id: string; name: string; description: string | null }) {
    return {
      id: category.id,
      name: category.name,
      description: category.description ?? undefined,
    };
  }

  private async categoryNameIsUnique(
    client: Prisma.TransactionClient | PrismaService,
    name: string,
    id?: string,
  ) {
    const existingCategory = await client.skillCategory.findFirst({
      where: {
        name,
      },
    });

    if (!existingCategory) {
      return true;
    }

    if (id && existingCategory.id === id) {
      return true;
    }

    return false;
  }

  private async categoryIdExists(categoryId: string) {
    return (await this.prisma.skillCategory.findUnique({ where: { id: categoryId } })) !== null;
  }

  private async categoryIdExistsWithClient(client: Prisma.TransactionClient | PrismaService, categoryId: string) {
    return (await client.skillCategory.findUnique({ where: { id: categoryId } })) !== null;
  }
}
