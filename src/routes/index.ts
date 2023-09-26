import express, { NextFunction, Request, Response } from 'express';
import allRoutes from './routes-config';
import { envConfig } from '../config';
import { ForbiddenError } from '../utils/ApiError';
import { checkIfExists } from '../utils/helpers';
// we override the default linting and ts rules to allow the use of tc-core-library-js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { middleware } from 'tc-core-library-js';

const authenticator = middleware.jwtAuthenticator;
const router = express.Router();

allRoutes.forEach((route) => {
    const middlewares = [];

    if (route.auth) {
        // add authentication middleware if route requires authentication
        middlewares.push((req: Request, res: Response, next: NextFunction) => {
            authenticator({
                AUTH_SECRET: envConfig.AUTH_SECRET,
                VALID_ISSUERS: envConfig.VALID_ISSUERS
            })(req, res, next);
        });
        // scopes & permissions check
        middlewares.push((req: Request | any, res: Response, next: NextFunction) => {
            if (req.authUser.isMachine && route.scopes) {
                // M2M
                if (!req.authUser.scopes || !checkIfExists(route.scopes, req.authUser.scopes)) {
                    next(new ForbiddenError('You are not allowed to perform this action!'));
                } else {
                    req.authUser.handle = envConfig.M2M_AUDIT_HANDLE;
                    req.userToken = req.headers.authorization.split(' ')[1];
                    next();
                }
            } else {
                req.authUser.userId = String(req.authUser.userId);
                // User roles authorization
                if (req.authUser.roles) {
                    if (route.access && !checkIfExists(route.access.map(a => a.toLowerCase()),req.authUser.roles.map((r: string) => r.toLowerCase()))) {
                        next(new ForbiddenError('You are not allowed to perform this action!'));
                    } else {
                        // user token is used in create/update operations
                        req.userToken = req.headers.authorization.split(' ')[1];
                        next();
                    }
                } else {
                    next(new ForbiddenError('You are not authorized to perform this action'));
                }
            }
        });
    }

    middlewares.push(
        // execute controller method by wrapping it in a try/catch block
        // for async/await error handling
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const controller = new (require(`../controllers/${route.controller}`).default)();
                await controller[route.method](req, res, next).catch((error: any) => {
                    next(error);
                });
            } catch (error: any) {
                next(error);
            }
        }
    );

    // register route with router
    router[route.verb](
        route.path,
        middlewares
    );
});

export default router;
