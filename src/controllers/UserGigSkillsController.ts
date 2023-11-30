import {AuthorizedRequest} from '../types';
import * as UserGigSkillsService from '../services/UserGigSkillsService';
import {NextFunction, Response} from 'express';
import { UserGigSkillsRequestBodyDto } from '../dto';

export default class UserGigSkillsController {
    /**
    * Creates a new user gig skills tracker entry
    */
    async createUserGigSkillsRecord(
        req: AuthorizedRequest<{ [key: string]: string }, any, any, UserGigSkillsRequestBodyDto, Record<string, any>>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            await UserGigSkillsService.createUserGigSkillsRecord(req.authUser, req.body);
            res.status(201).json();
        } catch (error) {
            next(error);
        }
    }
}
