import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { NotFoundError } from './utils/errors';
import ErrorHandler from './middlewares/ErrorHandler';
import { envConfig } from './config';
import routes from './routes';
import cors from 'cors';

const app: Application = express();
const PORT = envConfig.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path + ' does not exist!')));

app.use(ErrorHandler.handle());

const startServer = async () => {
    try {
        app.listen(PORT, (): void => {
            console.log(`Connected successfully on port ${PORT}`);
        });
    } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
    }
};

startServer();
