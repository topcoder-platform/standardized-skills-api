import * as config from '../config';
import { RouteDefinition } from '../interfaces';
import {
    GetAutocompleteRequestQueryDto,
    GetSkillsQueryRequestDto,
    GetUserSkillsRequestQueryDto,
    UpdateUserSkillsRequestBodyDto,
    SetWorkSkillsRequestBodyDto,
    UserIdParamDto,
    RemoveUserSkillsRequestBodyDto,
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
                dto: GetUserSkillsRequestQueryDto,
            },
        },
    },
    {
        path: '/user-skills/:userId',
        verb: 'put',
        controller: 'UserSkillsController',
        method: 'updateUserSkills',
        auth: true,
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
        verb: 'delete',
        controller: 'UserSkillsController',
        method: 'removeUserSkills',
        auth: true,
        scopes: [config.envConfig.SCOPES.ALL, config.envConfig.SCOPES.DELETE],
        validation: {
            params: {
                dto: UserIdParamDto,
            },
            body: {
                dto: RemoveUserSkillsRequestBodyDto,
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
];

export default RouteDefinitions;
