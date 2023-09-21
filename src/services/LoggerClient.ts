import { format, transports, createLogger, Logger } from 'winston';
import { Service } from 'typedi';
const { combine, timestamp, json } = format;

@Service()
export class LoggerClient {
    private logger: Logger;

    constructor(service = 'general-purpose') {
        this.logger = createLogger({
            defaultMeta: { service },
            format: combine(
                timestamp(),
                json(),
                format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
            ),
            transports: [new transports.Console()],
        });

        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(
                new transports.Console({
                    format: format.combine(format.colorize(), format.simple()),
                }),
            );
        }
    }

    info = (message: string) => {
        this.logger.info(message);
    };

    error = (message: string) => {
        this.logger.error(message);
    };
}
