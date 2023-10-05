// import { UserRoles } from '../config';
import { GetAutocompleteRequestQueryDto, GetSkillsQueryRequestDto } from '../dto';
import { RouteDefinition } from '../interfaces';

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
        // auth: true,
        // access: [UserRoles.Admin],
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
];

export default RouteDefinitions;
