import { RouteDefinition } from '../interfaces';

const RouteDefinitions: RouteDefinition[] = [
    {
        path: '/health',
        verb: 'get',
        controller: 'HealthController',
        method: 'health',
    }
];

export default RouteDefinitions;
