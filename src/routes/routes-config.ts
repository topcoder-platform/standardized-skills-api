import * as config from '../config';
import { RouteDefinition } from '../interfaces';
import {
    GetAutocompleteRequestQueryDto,
    GetSkillsQueryRequestDto,
    GetUserSkillsQueryDto,
    UpdateUserSkillsRequestBodyDto,
    SetWorkSkillsRequestBodyDto,
    UserIdParamDto,
    SkillEventRequestBodyDto,
    SkillIdRequestPathParamDto,
} from '../dto';
import {
    AllCategoriesRequestQueryDto,
    CategoryIdRequestPathParamDto,
    NewCategoryRequestBodyDto,
    UpdateCategoryPartialRequestDto,
    UpdateCategoryRequestBodyDto,
} from '../dto/CategoryRequest.dto';

const RouteDefinitions: RouteDefinition[] = [
    {
        path: '/health',
        verb: 'get',
        controller: 'HealthController',
        method: 'health',
    },
    {
        path: '/skills',
        verb: 'get',
        controller: 'SkillsController',
        method: 'getSkills',
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.READ],
        validation: {
            query: {
                dto: GetSkillsQueryRequestDto,
            },
        },
    },
    {
        path: '/skills/autocomplete',
        verb: 'get',
        controller: 'SkillsController',
        method: 'getAutocompleteSuggestions',
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.READ],
        validation: {
            query: {
                dto: GetAutocompleteRequestQueryDto,
            },
        },
    },
    {
        path: '/skills/:skillId',
        verb: 'get',
        controller: 'SkillsController',
        method: 'getSkillById',
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.READ],
        validation: {
            params: {
                dto: SkillIdRequestPathParamDto,
            },
        },
    },
    {
        path: '/user-skills/:userId',
        verb: 'get',
        controller: 'UserSkillsController',
        method: 'getUserSkills',
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.READ],
        validation: {
            params: {
                dto: UserIdParamDto,
            },
            query: {
                dto: GetUserSkillsQueryDto,
            },
        },
    },
    {
        path: '/user-skills/:userId',
        verb: 'post',
        controller: 'UserSkillsController',
        method: 'createUserSkills',
        auth: true,
        access: [config.UserRoles.Admin, config.UserRoles.User],
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.CREATE],
        validation: {
            params: {
                dto: UserIdParamDto,
            },
            body: {
                dto: UpdateUserSkillsRequestBodyDto,
            },
        },
    },
    {
        path: '/user-skills/:userId',
        verb: 'put',
        controller: 'UserSkillsController',
        method: 'updateUserSkills',
        auth: true,
        access: [config.UserRoles.Admin, config.UserRoles.User],
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.CREATE, config.envConfig.SCOPES.UPDATE],
        validation: {
            params: {
                dto: UserIdParamDto,
            },
            body: {
                dto: UpdateUserSkillsRequestBodyDto,
            },
        },
    },
    {
        path: '/work-skills',
        verb: 'post',
        controller: 'WorkSkillsController',
        method: 'setWorkSkills',
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.CREATE],
        validation: {
            body: {
                dto: SetWorkSkillsRequestBodyDto,
            },
        },
    },
    {
        path: '/skill-events',
        verb: 'post',
        controller: 'SkillEventsController',
        method: 'processSkillEvent',
        auth: true,
        access: [config.UserRoles.Admin],
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.CREATE, config.envConfig.SCOPES.UPDATE],
        validation: {
            body: {
                forbidNonWhitelisted: false,
                dto: SkillEventRequestBodyDto,
            },
        },
    },
    {
        path: '/categories/:categoryId',
        verb: 'get',
        controller: 'SkillCategoryController',
        method: 'getCategoryById',
        auth: true,
        scopes: [config.envConfig.SCOPES.READ, config.envConfig.SCOPES.ALL],
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
        },
    },
    {
        path: '/categories',
        verb: 'get',
        controller: 'SkillCategoryController',
        method: 'getAllCategories',
        auth: true,
        scopes: [config.envConfig.SCOPES.READ, config.envConfig.SCOPES.ALL],
        validation: {
            query: {
                dto: AllCategoriesRequestQueryDto,
            },
        },
    },
    {
        path: '/categories',
        verb: 'post',
        controller: 'SkillCategoryController',
        method: 'createCategory',
        auth: true,
        access: [config.UserRoles.Admin],
        scopes: [config.envConfig.SCOPES.CREATE, config.envConfig.SCOPES.ALL],
        validation: {
            body: {
                dto: NewCategoryRequestBodyDto,
            },
        },
    },
    {
        path: '/categories/:categoryId',
        verb: 'put',
        controller: 'SkillCategoryController',
        method: 'updateCategory',
        auth: true,
        access: [config.UserRoles.Admin],
        scopes: [config.envConfig.SCOPES.UPDATE, config.envConfig.SCOPES.ALL],
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
            body: {
                dto: UpdateCategoryRequestBodyDto,
            },
        },
    },
    {
        path: '/categories/:categoryId',
        verb: 'patch',
        controller: 'SkillCategoryController',
        method: 'updateCategoryPartial',
        auth: true,
        access: [config.UserRoles.Admin],
        scopes: [config.envConfig.SCOPES.UPDATE, config.envConfig.SCOPES.ALL],
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
            body: {
                dto: UpdateCategoryPartialRequestDto,
            },
        },
    },
    {
        path: '/categories/:categoryId',
        verb: 'delete',
        controller: 'SkillCategoryController',
        method: 'deleteCategory',
        auth: true,
        access: [config.UserRoles.Admin],
        scopes: [config.envConfig.SCOPES.DELETE, config.envConfig.SCOPES.ALL],
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
        },
    },
];

export default RouteDefinitions;
