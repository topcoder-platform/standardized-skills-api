import { Body, Controller, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
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
    UserSkillDisplayModeDto,
    UserSkillResponseDto,
} from '../../dto';
import * as helper from '../../utils/helpers';
import { UserSkillsService } from './user-skills.service';

@Controller('user-skills')
@UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
@Roles(UserRoles.Admin, UserRoles.User)
@ApiTags('User Skills')
@ApiBearerAuth()
export class UserSkillsController {
    constructor(private readonly userSkillsService: UserSkillsService) {}
    // Constrain via DTO validation instead of path regex (path-to-regexp v8 incompatible)
    @ApiOperation({ summary: 'Get user skills', description: 'Returns skills associated with the given user, including display mode and levels.' })
    @ApiParam({ name: 'userId', description: 'User identifier', example: '123456' })
    @ApiQuery({ name: 'page', required: false, example: 1, type: Number })
    @ApiQuery({ name: 'perPage', required: false, example: 20, type: Number })
    @ApiQuery({ name: 'sortBy', required: false, enum: ['name', 'category', 'level'] })
    @ApiQuery({ name: 'sortOrder', required: false, enum: ['ASC', 'DESC'], example: 'ASC' })
    @ApiQuery({ name: 'disablePagination', required: false, example: 'false', description: 'Set to true to return the full list without pagination.' })
    @ApiOkResponse({
        description: 'User skills.',
        type: UserSkillResponseDto,
        isArray: true,
        headers: {
            'X-Page': { description: 'Current page', schema: { type: 'integer', example: 1 } },
            'X-Per-Page': { description: 'Page size', schema: { type: 'integer', example: 20 } },
            'X-Total': { description: 'Total items', schema: { type: 'integer', example: 50 } },
            'X-Total-Pages': { description: 'Total pages', schema: { type: 'integer', example: 3 } },
        },
    })
    @Get('display-modes')
    @ApiOperation({ summary: 'List user skill display modes' })
    @ApiQuery({ name: 'page', required: false, example: 1, type: Number })
    @ApiQuery({ name: 'perPage', required: false, example: 20, type: Number })
    @ApiQuery({ name: 'sortBy', required: false, enum: ['name'] })
    @ApiQuery({ name: 'sortOrder', required: false, enum: ['ASC', 'DESC'], example: 'ASC' })
    @ApiQuery({ name: 'disablePagination', required: false, example: 'false' })
    @ApiOkResponse({
        description: 'Display modes list.',
        type: UserSkillDisplayModeDto,
        isArray: true,
        headers: {
            'X-Page': { description: 'Current page', schema: { type: 'integer', example: 1 } },
            'X-Per-Page': { description: 'Page size', schema: { type: 'integer', example: 20 } },
            'X-Total': { description: 'Total items', schema: { type: 'integer', example: 5 } },
            'X-Total-Pages': { description: 'Total pages', schema: { type: 'integer', example: 1 } },
        },
    })
    
    @Get(':userId')
    async getUserSkills(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: UserIdParamDto,
        @Query() query: GetUserSkillsQueryDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const result = await this.userSkillsService.getUserSkills(user, Number(params.userId), query);
        const disablePagination = query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

        if (!disablePagination) {
            helper.setResHeaders(res, result);
        }

        return result.skills;
    }

    async getUserSkillsDisplayModes(
        @Query() query: GetUserSkillsDisplayModesQueryDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { displayModes, ...paginationData } = await this.userSkillsService.getUserSkillsDisplayModes(query);
        const disablePagination = query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

        if (!disablePagination) {
            helper.setResHeaders(res, paginationData);
        }

        return displayModes;
    }

    @Get('display-modes/:name')
    @ApiOperation({ summary: 'Get display mode by name' })
    @ApiParam({ name: 'name', description: 'Display mode name', example: 'public' })
    @ApiOkResponse({ description: 'Display mode.', type: UserSkillDisplayModeDto })
    getUserSkillsDisplayModeByName(@Param() params: GetUserSkillsDisplayModeParamDto) {
        return this.userSkillsService.getUserSkillsDisplayModeByName(params.name);
    }

    @Post(':userId')
    @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.CREATE)
    @ApiOperation({ summary: 'Create user skills' })
    @ApiParam({ name: 'userId', description: 'User identifier', example: '123456' })
    @ApiCreatedResponse({ description: 'Skills created for user.', type: UserSkillResponseDto, isArray: true })
    async createUserSkills(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: UserIdParamDto,
        @Body() body: UpdateUserSkillsRequestBodyDto,
    ) {
        const result = await this.userSkillsService.createUserSkills(user, Number(params.userId), body);
        return result.skills;
    }

    @Put(':userId')
    @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.UPDATE)
    @ApiOperation({ summary: 'Replace user skills' })
    @ApiParam({ name: 'userId', description: 'User identifier', example: '123456' })
    @ApiOkResponse({ description: 'Skills updated for user.', type: UserSkillResponseDto, isArray: true })
    async updateUserSkills(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: UserIdParamDto,
        @Body() body: UpdateUserSkillsRequestBodyDto,
    ) {
        const result = await this.userSkillsService.updateUserSkills(user, Number(params.userId), body);
        return result.skills;
    }
}
