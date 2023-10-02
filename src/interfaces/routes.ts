export interface RouteDefinition {
    access?: string[];
    auth?: boolean;
    controller: string;
    method: string;
    path: string;
    scopes?: string[];
    verb: 'get' | 'patch' | 'post' | 'put' | 'delete';
    validation?: {
        body?: {
            dto: any;
            skipMissingProperties?: boolean;
            forbidNonWhitelisted?: boolean;
        };
        params?: {
            dto: any;
            skipMissingProperties?: boolean;
            forbidNonWhitelisted?: boolean;
        };
        query?: {
            dto: any;
            skipMissingProperties?: boolean;
            forbidNonWhitelisted?: boolean;
        };
    };
}
