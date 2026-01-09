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
    CategoryResponseDto,
    SkillResponseDto,
} from '../../dto';
import { UserRoles } from '../../config';
import * as helper from '../../utils/helpers';
import { SkillCategoriesService } from './skill-categories.service';

@Controller('categories')
@UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
@Roles(UserRoles.Admin)
@ApiTags('Skill Categories')
@ApiBearerAuth()
export class SkillCategoriesController {
    constructor(private readonly skillCategoriesService: SkillCategoriesService) {}

    @ApiOperation({ summary: 'Get category by id' })
    @ApiParam({ name: 'categoryId', description: 'Category identifier', format: 'uuid' })
    @ApiOkResponse({ description: 'Category detail.', type: CategoryResponseDto })
    @Get(':categoryId')
    getCategoryById(@Param() params: CategoryIdRequestPathParamDto) {
        return this.skillCategoriesService.getCategoryById(params.categoryId);
    }

    @ApiOperation({ summary: 'List categories', description: 'Returns categories with optional pagination and filtering.' })
    @ApiQuery({ name: 'page', required: false, example: 1, type: Number })
    @ApiQuery({ name: 'perPage', required: false, example: 20, type: Number })
    @ApiQuery({ name: 'sortBy', required: false, enum: ['name', 'description', 'created_at', 'updated_at'] })
    @ApiQuery({ name: 'sortOrder', required: false, enum: ['ASC', 'DESC'], example: 'ASC' })
    @ApiQuery({ name: 'disablePagination', required: false, example: 'false', description: 'Set to true to return all records.' })
    @ApiQuery({ name: 'name', required: false, description: 'Case-insensitive name filter.' })
    @ApiOkResponse({
        description: 'List of categories.',
        type: CategoryResponseDto,
        isArray: true,
        headers: {
            'X-Page': { description: 'Current page', schema: { type: 'integer', example: 1 } },
            'X-Per-Page': { description: 'Page size', schema: { type: 'integer', example: 20 } },
            'X-Total': { description: 'Total items', schema: { type: 'integer', example: 12 } },
            'X-Total-Pages': { description: 'Total pages', schema: { type: 'integer', example: 1 } },
        },
    })
    @Get()
    async getAllCategories(@Query() query: AllCategoriesRequestQueryDto, @Res({ passthrough: true }) res: Response) {
        const result = await this.skillCategoriesService.getAllCategories(query);
        const disablePagination = query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

        if (!disablePagination) {
            helper.setResHeaders(res, result);
        }

        return result.categories;
    }

    @ApiOperation({ summary: 'List skills by category', description: 'Returns skills that belong to the given category.' })
    @ApiParam({ name: 'categoryId', description: 'Category identifier', format: 'uuid' })
    @ApiQuery({ name: 'page', required: false, example: 1, type: Number })
    @ApiQuery({ name: 'perPage', required: false, example: 20, type: Number })
    @ApiQuery({ name: 'sortBy', required: false, enum: ['name', 'description', 'created_at', 'updated_at'] })
    @ApiQuery({ name: 'sortOrder', required: false, enum: ['ASC', 'DESC'], example: 'ASC' })
    @ApiQuery({ name: 'disablePagination', required: false, example: 'false', description: 'Set to true to return all results.' })
    @ApiOkResponse({
        description: 'Skills in the category.',
        type: SkillResponseDto,
        isArray: true,
        headers: {
            'X-Page': { description: 'Current page', schema: { type: 'integer', example: 1 } },
            'X-Per-Page': { description: 'Page size', schema: { type: 'integer', example: 20 } },
            'X-Total': { description: 'Total items', schema: { type: 'integer', example: 25 } },
            'X-Total-Pages': { description: 'Total pages', schema: { type: 'integer', example: 2 } },
        },
    })
    @Get(':categoryId/skills')
    async getCategorySkills(
        @Param() params: CategoryIdRequestPathParamDto,
        @Query() query: GetCategorySkillsRequestQueryDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const result = await this.skillCategoriesService.getCategorySkills(params.categoryId, query);
        const disablePagination = query.disablePagination !== undefined && `${query.disablePagination}` !== 'false';

        if (!disablePagination) {
            helper.setResHeaders(res, result);
        }

        return result.skills;
    }

    @Post(':categoryId/assign-skills')
    @ApiOperation({ summary: 'Assign skills to category' })
    @ApiParam({ name: 'categoryId', description: 'Category identifier', format: 'uuid' })
    @ApiCreatedResponse({ description: 'Skills reassigned.', type: SkillResponseDto, isArray: true })
    bulkAssignSkillsToCategory(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: CategoryIdRequestPathParamDto,
        @Body() body: SkillIdsRequestBodyDto,
    ) {
        return this.skillCategoriesService.bulkAssignSkillsToCategories(user, params.categoryId, body.skillIds);
    }

    @Post()
    @ApiOperation({ summary: 'Create category' })
    @ApiCreatedResponse({ description: 'Category created.', type: CategoryResponseDto })
    createCategory(@AuthUserDecorator() user: AuthUser, @Body() body: NewCategoryRequestBodyDto) {
        return this.skillCategoriesService.createNewCategory(user, body);
    }

    @Put(':categoryId')
    @ApiOperation({ summary: 'Replace category' })
    @ApiParam({ name: 'categoryId', description: 'Category identifier', format: 'uuid' })
    @ApiOkResponse({ description: 'Category updated.', type: CategoryResponseDto })
    updateCategory(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: CategoryIdRequestPathParamDto,
        @Body() body: UpdateCategoryRequestBodyDto,
    ) {
        return this.skillCategoriesService.updateCategory(user, params.categoryId, body);
    }

    @Patch(':categoryId')
    @ApiOperation({ summary: 'Update category partially' })
    @ApiParam({ name: 'categoryId', description: 'Category identifier', format: 'uuid' })
    @ApiCreatedResponse({ description: 'Category patched.', type: CategoryResponseDto })
    patchCategory(
        @AuthUserDecorator() user: AuthUser,
        @Param() params: CategoryIdRequestPathParamDto,
        @Body() body: UpdateCategoryPartialRequestDto,
    ) {
        return this.skillCategoriesService.patchCategory(user, params.categoryId, body);
    }

    @Delete(':categoryId')
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete category' })
    @ApiParam({ name: 'categoryId', description: 'Category identifier', format: 'uuid' })
    @ApiNoContentResponse({ description: 'Category deleted.' })
    deleteCategory(@AuthUserDecorator() user: AuthUser, @Param() params: CategoryIdRequestPathParamDto) {
        return this.skillCategoriesService.deleteCategory(user, params.categoryId);
    }
}
