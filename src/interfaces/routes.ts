export interface RouteDefinition {
    access?: string[];
    auth?: boolean;
    controller: string;
    method: string;
    path: string;
    scopes?: string[];
    verb: 'get' | 'patch' | 'post' | 'put' | 'delete';
}
