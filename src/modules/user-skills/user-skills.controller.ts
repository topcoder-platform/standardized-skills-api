import { Body, Controller, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { AuthUserDecorator, JwtAuthGuard, Roles, RolesGuard, Scopes, ScopesGuard } from '../../common';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import { UserRoles, envConfig } from '../../config';
import {
  GetUserSkillsDisplayModeParamDto,
  GetUserSkillsDisplayModesQueryDto,
  GetUserSkillsQueryDto,
  UpdateUserSkillsRequestBodyDto,
  UserIdParamDto,
} from '../../dto';
import * as helper from '../../utils/helpers';
import { UserSkillsService } from './user-skills.service';

@Controller('user-skills')
@UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
@Roles(UserRoles.Admin, UserRoles.User)
export class UserSkillsController {
  constructor(private readonly userSkillsService: UserSkillsService) {}
  // Constrain to numeric IDs so 'display-modes' doesn't match this route
  @Get(':userId(\\d+)')
  async getUserSkills(
    @AuthUserDecorator() user: AuthUser,
    @Param() params: UserIdParamDto,
    @Query() query: GetUserSkillsQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.userSkillsService.getUserSkills(user, Number(params.userId), query);
    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

    if (!disablePagination) {
      helper.setResHeaders(res, result);
    }

    return result.skills;
  }

  @Get('display-modes')
  async getUserSkillsDisplayModes(
    @Query() query: GetUserSkillsDisplayModesQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { displayModes, ...paginationData } = await this.userSkillsService.getUserSkillsDisplayModes(query);
    const disablePagination =
      query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

    if (!disablePagination) {
      helper.setResHeaders(res, paginationData);
    }

    return displayModes;
  }

  @Get('display-modes/:name')
  getUserSkillsDisplayModeByName(@Param() params: GetUserSkillsDisplayModeParamDto) {
    return this.userSkillsService.getUserSkillsDisplayModeByName(params.name);
  }

  @Post(':userId(\\d+)')
  @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.CREATE)
  async createUserSkills(
    @AuthUserDecorator() user: AuthUser,
    @Param() params: UserIdParamDto,
    @Body() body: UpdateUserSkillsRequestBodyDto,
  ) {
    const result = await this.userSkillsService.createUserSkills(user, Number(params.userId), body);
    return result.skills;
  }

  @Put(':userId(\\d+)')
  @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.UPDATE)
  async updateUserSkills(
    @AuthUserDecorator() user: AuthUser,
    @Param() params: UserIdParamDto,
    @Body() body: UpdateUserSkillsRequestBodyDto,
  ) {
    const result = await this.userSkillsService.updateUserSkills(user, Number(params.userId), body);
    return result.skills;
  }
}
