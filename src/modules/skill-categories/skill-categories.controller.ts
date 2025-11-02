import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { AuthUserDecorator, JwtAuthGuard, Roles, RolesGuard, ScopesGuard } from '../../common';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import {
  AllCategoriesRequestQueryDto,
  CategoryIdRequestPathParamDto,
  GetCategorySkillsRequestQueryDto,
  NewCategoryRequestBodyDto,
  SkillIdsRequestBodyDto,
  UpdateCategoryPartialRequestDto,
  UpdateCategoryRequestBodyDto,
} from '../../dto';
import { UserRoles } from '../../config';
import * as helper from '../../utils/helpers';
import { SkillCategoriesService } from './skill-categories.service';

@Controller('categories')
@UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
@Roles(UserRoles.Admin)
export class SkillCategoriesController {
  constructor(private readonly skillCategoriesService: SkillCategoriesService) {}

  @Get(':categoryId')
  getCategoryById(@Param() params: CategoryIdRequestPathParamDto) {
    return this.skillCategoriesService.getCategoryById(params.categoryId);
  }

  @Get()
  async getAllCategories(
    @Query() query: AllCategoriesRequestQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.skillCategoriesService.getAllCategories(query);
    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

    if (!disablePagination) {
      helper.setResHeaders(res, result);
    }

    return result.categories;
  }

  @Get(':categoryId/skills')
  async getCategorySkills(
    @Param() params: CategoryIdRequestPathParamDto,
    @Query() query: GetCategorySkillsRequestQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.skillCategoriesService.getCategorySkills(params.categoryId, query);
    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

    if (!disablePagination) {
      helper.setResHeaders(res, result);
    }

    return result.skills;
  }

  @Post(':categoryId/assign-skills')
  bulkAssignSkillsToCategory(
    @AuthUserDecorator() user: AuthUser,
    @Param() params: CategoryIdRequestPathParamDto,
    @Body() body: SkillIdsRequestBodyDto,
  ) {
    return this.skillCategoriesService.bulkAssignSkillsToCategories(user, params.categoryId, body.skillIds);
  }

  @Post()
  createCategory(@AuthUserDecorator() user: AuthUser, @Body() body: NewCategoryRequestBodyDto) {
    return this.skillCategoriesService.createNewCategory(user, body);
  }

  @Put(':categoryId')
  updateCategory(
    @AuthUserDecorator() user: AuthUser,
    @Param() params: CategoryIdRequestPathParamDto,
    @Body() body: UpdateCategoryRequestBodyDto,
  ) {
    return this.skillCategoriesService.updateCategory(user, params.categoryId, body);
  }

  @Patch(':categoryId')
  patchCategory(
    @AuthUserDecorator() user: AuthUser,
    @Param() params: CategoryIdRequestPathParamDto,
    @Body() body: UpdateCategoryPartialRequestDto,
  ) {
    return this.skillCategoriesService.patchCategory(user, params.categoryId, body);
  }

  @Delete(':categoryId')
  @HttpCode(204)
  deleteCategory(@AuthUserDecorator() user: AuthUser, @Param() params: CategoryIdRequestPathParamDto) {
    return this.skillCategoriesService.deleteCategory(user, params.categoryId);
  }
}
