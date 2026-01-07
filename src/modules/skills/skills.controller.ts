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
} from '../../dto';
import * as helper from '../../utils/helpers';
import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {
    constructor(private readonly skillsService: SkillsService) {}

    @Get()
    async getSkills(@Query() query: GetSkillsQueryRequestDto, @Res({ passthrough: true }) res: Response) {
        const result = await this.skillsService.getAllSkills(query);
        const disablePagination = query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

        if (!disablePagination) {
            helper.setResHeaders(res, result);
        }

        return result.skills;
    }

    @Get('autocomplete')
    getAutocompleteSuggestions(@Query() query: GetAutocompleteRequestQueryDto) {
        return this.skillsService.autocompleteSkills(query);
    }

    @Get('fuzzymatch')
    getFuzzyMatch(@Query() query: GetAutocompleteRequestQueryDto) {
        return this.skillsService.fuzzyMatch(query);
    }

    @Get(':skillId')
    getSkillById(@Param() params: SkillIdRequestPathParamDto) {
        return this.skillsService.getSkillById(params.skillId);
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
    createSkill(@AuthUserDecorator() user: AuthUser, @Body() body: SkillCreationRequestBodyDto) {
        return this.skillsService.createSkill(user, body);
    }

    @Put(':skillId')
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
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
    deleteSkill(@AuthUserDecorator() user: AuthUser, @Param() params: SkillIdRequestPathParamDto) {
        return this.skillsService.deleteSkill(user, params.skillId);
    }

    @Put(':skillId/restore')
    @UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
    @Roles(UserRoles.Admin)
    restoreSkill(@Param() params: SkillIdRequestPathParamDto) {
        return this.skillsService.restoreSkill(params.skillId);
    }
}
