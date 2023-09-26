import { SuccessResponse } from '../utils/SuccessResponse';
import { Request, Response } from 'express';

export default class HealthController {
    /**
     * Generic health check endpoint
     */
    health = async (req: Request, res: Response) => {
        const response = new SuccessResponse({
            status: 'ok',
        });

        res.status(200).json(response);
    };
}
