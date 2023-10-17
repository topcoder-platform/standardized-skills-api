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
} from '../dto';

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
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.READ],
        validation: {
            query: {
                dto: GetAutocompleteRequestQueryDto,
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
                dto: SkillEventRequestBodyDto,
            },
        },
    },
];

export default RouteDefinitions;
