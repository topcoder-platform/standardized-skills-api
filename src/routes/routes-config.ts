import { GetAutocompleteRequestQueryDto, GetSkillsQueryRequestDto, SetWorkSkillsRequestBodyDto } from '../dto';
import { RouteDefinition } from '../interfaces';
import * as config from '../config';

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
