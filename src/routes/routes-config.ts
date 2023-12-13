import * as config from '../config';
import { RouteDefinition } from '../interfaces';
import {
    GetAutocompleteRequestQueryDto,
    GetSkillsQueryRequestDto,
    GetUserSkillsQueryDto,
    UpdateUserSkillsRequestBodyDto,
    UserIdParamDto,
    SkillEventRequestBodyDto,
    SkillIdRequestPathParamDto,
    SkillCreationRequestBodyDto,
    SkillUpdatePutRequestBodyDto,
    SkillUpdatePatchRequestBodyDto,
    SkillIdsRequestBodyDto,
    GetUserSkillsDisplayModesQueryDto,
    GetUserSkillsDisplayModeParamDto,
    WorkSkillsRequestBodyDto,
    JobIdRequestParamDto,
    ChallengeIdRequestParamDto,
} from '../dto';
import {
    AllCategoriesRequestQueryDto,
    CategoryIdRequestPathParamDto,
    GetCategorySkillsRequestQueryDto,
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
        access: [config.UserRoles.Admin],
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
        validation: {
            params: {
                dto: SkillIdRequestPathParamDto,
            },
        },
    },
    {
        path: '/skills/:skillId',
        verb: 'delete',
        controller: 'SkillsController',
        method: 'deleteSkill',
        auth: true,
        access: [config.UserRoles.Admin],
        validation: {
            params: {
                dto: SkillIdRequestPathParamDto,
            },
        },
    },
    {
        path: '/skills/:skillId/restore',
        verb: 'put',
        controller: 'SkillsController',
        method: 'restoreSkill',
        auth: true,
        access: [config.UserRoles.Admin],
        validation: {
            params: {
                dto: SkillIdRequestPathParamDto,
            },
        },
    },
    {
        path: '/skills/:skillId',
        verb: 'put',
        controller: 'SkillsController',
        method: 'updateSkill',
        auth: true,
        access: [config.UserRoles.Admin],
        validation: {
            params: {
                dto: SkillIdRequestPathParamDto,
            },
            body: {
                dto: SkillUpdatePutRequestBodyDto,
            },
        },
    },
    {
        path: '/skills/:skillId',
        verb: 'patch',
        controller: 'SkillsController',
        method: 'patchSkill',
        auth: true,
        access: [config.UserRoles.Admin],
        validation: {
            params: {
                dto: SkillIdRequestPathParamDto,
            },
            body: {
                dto: SkillUpdatePatchRequestBodyDto,
            },
        },
    },
    {
        path: '/skills',
        verb: 'post',
        controller: 'SkillsController',
        method: 'createSkill',
        auth: true,
        access: [config.UserRoles.Admin],
        validation: {
            body: {
                dto: SkillCreationRequestBodyDto,
            },
        },
    },
    {
        path: '/user-skills/display-modes',
        verb: 'get',
        controller: 'UserSkillsController',
        method: 'getUserSkillsDisplayModes',
        auth: true,
        access: [config.UserRoles.Admin, config.UserRoles.User],
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.READ],
        validation: {
            query: {
                dto: GetUserSkillsDisplayModesQueryDto,
            },
        },
    },
    {
        path: '/user-skills/display-modes/:name',
        verb: 'get',
        controller: 'UserSkillsController',
        method: 'getUserSkillsDisplayModeByName',
        auth: true,
        access: [config.UserRoles.Admin, config.UserRoles.User],
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.READ],
        validation: {
            params: {
                dto: GetUserSkillsDisplayModeParamDto,
            },
        },
    },
    {
        path: '/user-skills/:userId',
        verb: 'get',
        controller: 'UserSkillsController',
        method: 'getUserSkills',
        auth: true,
        access: [config.UserRoles.Admin, config.UserRoles.User],
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
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.UPDATE],
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
        path: '/job-skills/:jobId',
        verb: 'post',
        controller: 'WorkSkillsController',
        method: 'setJobSkills',
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.CREATE, config.envConfig.SCOPES.UPDATE],
        validation: {
            params: {
                dto: JobIdRequestParamDto,
            },
            body: {
                dto: WorkSkillsRequestBodyDto,
            },
        },
    },
    {
        path: '/challenge-skills/:challengeId',
        verb: 'post',
        controller: 'WorkSkillsController',
        method: 'setChallengeSkills',
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.CREATE, config.envConfig.SCOPES.UPDATE],
        access: [
            config.UserRoles.Admin,
            config.UserRoles.Copilot,
            config.UserRoles.Manager,
            config.UserRoles.SelfServiceCustomer,
        ],
        validation: {
            params: {
                dto: ChallengeIdRequestParamDto,
            },
            body: {
                dto: WorkSkillsRequestBodyDto,
            },
        },
    },
    {
        path: '/skill-events',
        verb: 'post',
        controller: 'SkillEventsController',
        method: 'processSkillEvent',
        auth: true,
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
        access: [config.UserRoles.Admin],
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
        },
    },
    {
        path: '/categories/:categoryId/skills',
        verb: 'get',
        controller: 'SkillCategoryController',
        method: 'getCategorySkills',
        auth: true,
        access: [config.UserRoles.Admin],
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
            query: {
                dto: GetCategorySkillsRequestQueryDto,
            },
        },
    },
    {
        path: '/categories/:categoryId/assign-skills',
        verb: 'post',
        controller: 'SkillCategoryController',
        method: 'bulkAssignSkillsToCategory',
        auth: true,
        access: [config.UserRoles.Admin],
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
            body: {
                dto: SkillIdsRequestBodyDto,
            },
        },
    },
    {
        path: '/categories',
        verb: 'get',
        controller: 'SkillCategoryController',
        method: 'getAllCategories',
        auth: true,
        access: [config.UserRoles.Admin],
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
        method: 'patchCategory',
        auth: true,
        access: [config.UserRoles.Admin],
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
        validation: {
            params: {
                dto: CategoryIdRequestPathParamDto,
            },
        },
    },
];

export default RouteDefinitions;
