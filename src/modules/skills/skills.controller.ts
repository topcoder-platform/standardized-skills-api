import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Put,
    Query,
    Res,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';

import { AuthUserDecorator, JwtAuthGuard, Roles, RolesGuard, ScopesGuard } from '../../common';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import { UserRoles } from '../../config';
import {
    GetAutocompleteRequestQueryDto,
    GetSkillsQueryRequestDto,
    SkillCreationRequestBodyDto,
    SkillIdRequestPathParamDto,
    SkillUpdatePatchRequestBodyDto,
    SkillUpdatePutRequestBodyDto,
    SkillAutocompleteResponseDto,
    SkillFuzzyMatchResponseDto,
    SkillResponseDto,
} from '../../dto';
import * as helper from '../../utils/helpers';
import { SkillsService } from './skills.service';

@Controller('skills')
@ApiTags('Skills')
export class SkillsController {
    constructor(private readonly skillsService: SkillsService) {}

    @ApiOperation({ summary: 'List skills', description: 'Returns skills with optional pagination and filters.' })
    @ApiQuery({ name: 'page', required: false, example: 1, type: Number })
    @ApiQuery({ name: 'perPage', required: false, example: 20, type: Number })
    @ApiQuery({ name: 'sortBy', required: false, example: 'name', enum: ['name', 'description', 'created_at', 'updated_at'] })
    @ApiQuery({ name: 'sortOrder', required: false, example: 'ASC', enum: ['ASC', 'DESC'] })
    @ApiQuery({ name: 'disablePagination', required: false, example: 'false', description: 'Set to true to return all records without pagination.' })
    @ApiQuery({ name: 'showArchived', required: false, example: 'false', description: 'When true, archived (deleted) skills are also returned.' })
    @ApiQuery({ name: 'skillId', required: false, isArray: true, example: ['uuid-1', 'uuid-2'], description: 'Filter by one or more skill ids.' })
    @ApiQuery({ name: 'name', required: false, isArray: true, example: ['React'], description: 'Filter by one or more skill names.' })
    @ApiOkResponse({
        description: 'List of skills.',
        type: SkillResponseDto,
        isArray: true,
        headers: {
            'X-Page': { description: 'Current page', schema: { type: 'integer', example: 1 } },
            'X-Per-Page': { description: 'Page size', schema: { type: 'integer', example: 20 } },
            'X-Total': { description: 'Total items', schema: { type: 'integer', example: 120 } },
            'X-Total-Pages': { description: 'Total pages', schema: { type: 'integer', example: 6 } },
        },
    })
    @Get()
    async getSkills(@Query() query: GetSkillsQueryRequestDto, @Res({ passthrough: true }) res: Response) {
        const result = await this.skillsService.getAllSkills(query);
        const disablePagination = query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

        if (!disablePagination) {
            helper.setResHeaders(res, result);
        }

        return result.skills;
    }

    @ApiOperation({ summary: 'Autocomplete skills', description: 'Returns skills that match the provided prefix or term.' })
    @ApiQuery({ name: 'term', required: true, description: 'Term to match against skill names.' })
    @ApiQuery({ name: 'size', required: false, example: 10, description: 'Maximum number of suggestions to return.' })
    @ApiOkResponse({ description: 'Autocomplete matches.', type: SkillAutocompleteResponseDto, isArray: true })
    @Get('autocomplete')
    getAutocompleteSuggestions(@Query() query: GetAutocompleteRequestQueryDto) {
        return this.skillsService.autocompleteSkills(query);
    }

    @ApiOperation({ summary: 'Fuzzy skill match', description: 'Returns skills that loosely match the provided term.' })
    @ApiQuery({ name: 'term', required: true, description: 'Term to search for.' })
    @ApiQuery({ name: 'size', required: false, example: 10, description: 'Maximum results.' })
    @ApiOkResponse({ description: 'Fuzzy matched skills.', type: SkillFuzzyMatchResponseDto, isArray: true })
    @Get('fuzzymatch')
    getFuzzyMatch(@Query() query: GetAutocompleteRequestQueryDto) {
        return this.skillsService.fuzzyMatch(query);
    }

    @ApiOperation({ summary: 'Get skill by id' })
    @ApiParam({ name: 'skillId', description: 'Skill identifier', format: 'uuid' })
    @ApiOkResponse({ description: 'Skill detail.', type: SkillResponseDto })
    @Get(':skillId')
    getSkillById(@Param() params: SkillIdRequestPathParamDto) {
        return this.skillsService.getSkillById(params.skillId);
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
    @ApiOperation({ summary: 'Create skill' })
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Skill created.', type: SkillResponseDto })
    createSkill(@AuthUserDecorator() user: AuthUser, @Body() body: SkillCreationRequestBodyDto) {
        return this.skillsService.createSkill(user, body);
    }

    @Put(':skillId')
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
    @ApiOperation({ summary: 'Replace skill' })
    @ApiBearerAuth()
    @ApiParam({ name: 'skillId', description: 'Skill identifier', format: 'uuid' })
    @ApiOkResponse({ description: 'Skill replaced.', type: SkillResponseDto })
    updateSkill(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: SkillIdRequestPathParamDto,
        @Body() body: SkillUpdatePutRequestBodyDto,
    ) {
        return this.skillsService.updateSkill(user, body, params.skillId);
    }

    @Patch(':skillId')
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
    @ApiOperation({ summary: 'Update skill partially' })
    @ApiBearerAuth()
    @ApiParam({ name: 'skillId', description: 'Skill identifier', format: 'uuid' })
    @ApiCreatedResponse({ description: 'Skill updated.', type: SkillResponseDto })
    patchSkill(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: SkillIdRequestPathParamDto,
        @Body() body: SkillUpdatePatchRequestBodyDto,
    ) {
        return this.skillsService.patchSkill(user, body, params.skillId);
    }

    @Delete(':skillId')
    @HttpCode(204)
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
    @ApiOperation({ summary: 'Delete skill' })
    @ApiBearerAuth()
    @ApiParam({ name: 'skillId', description: 'Skill identifier', format: 'uuid' })
    @ApiNoContentResponse({ description: 'Skill deleted.' })
    deleteSkill(@AuthUserDecorator() user: AuthUser, @Param() params: SkillIdRequestPathParamDto) {
        return this.skillsService.deleteSkill(user, params.skillId);
    }

    @Put(':skillId/restore')
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
    @ApiOperation({ summary: 'Restore archived skill' })
    @ApiBearerAuth()
    @ApiParam({ name: 'skillId', description: 'Skill identifier', format: 'uuid' })
    @ApiOkResponse({ description: 'Skill restored.', type: SkillResponseDto })
    restoreSkill(@Param() params: SkillIdRequestPathParamDto) {
        return this.skillsService.restoreSkill(params.skillId);
    }
}
