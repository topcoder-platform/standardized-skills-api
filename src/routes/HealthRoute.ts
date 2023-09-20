import express from 'express';
import { Container } from 'typedi';
import HealthController from '../controllers/HealthController';

const router = express.Router();

const healthController = Container.get(HealthController);

router.get('/', healthController.health);

export default router;
