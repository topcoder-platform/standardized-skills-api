import { Request, Response } from 'express';

export default class HealthController {
    /**
     * Generic health check endpoint
     */
    health = async (req: Request, res: Response) => {
        res.status(200).json({ status: 'UP' });
    };
}
