import { UserRoles } from '../config';
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
    },
    {
        path: '/skills/autocomplete',
        verb: 'get',
        controller: 'SkillsController',
        method: 'getAutocompleteSuggestions',
    },
];

export default RouteDefinitions;
