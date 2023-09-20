import express from 'express';
import healthRoute from './HealthRoute';

const router = express.Router();

const allRoutes = [
    {
        path: '/health',
        route: healthRoute,
    },
];

allRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
