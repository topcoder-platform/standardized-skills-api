import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { NotFoundError } from './utils/ApiError';
import ErrorHandler from './middlewares/ErrorHandler';
import { envConfig } from './config';
import routes from './routes';
import http from 'http';
import cors from 'cors';

const app: Application = express();
const PORT = envConfig.port || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));

app.use(ErrorHandler.handle());

let server: http.Server;
const startServer = async () => {
    try {
        server = app.listen(PORT, (): void => {
            console.log(`Connected successfully on port ${PORT}`);
        });
    } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
    }
};

startServer();

process.on('SIGTERM', () => {
    console.info('SIGTERM received');
    if (server) server.close();
});
