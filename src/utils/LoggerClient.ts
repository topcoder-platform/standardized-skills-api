import { createLogger, format, Logger, transports } from 'winston';
const { combine, timestamp, json, label } = format;

export class LoggerClient {
    private logger: Logger;

    constructor(service = 'general-purpose') {
        this.logger = createLogger({
            defaultMeta: { service },
        });

        if (process.env.NODE_ENV === 'local') {
            this.logger.add(
                new transports.Console({
                    format: format.combine(
                        label({ label: 'StandardizedSkillsApi\t' }),
                        format.colorize(),
                        format.simple(),
                    ),
                }),
            );
        } else {
            this.logger.add(
                new transports.Console({
                    format: combine(
                        label({ label: 'StandardizedSkillsApi' }),
                        timestamp(),
                        json(),
                        format.printf(
                            (info) =>
                                `[${info.label}] [${info.timestamp}] - [${info.level.toUpperCase()}] : ${info.message}`,
                        ),
                    ),
                }),
            );
        }
    }

    info = (message: string) => {
        this.logger.info(message);
    };

    warn = (message: string) => {
        this.logger.warn(message);
    };

    error = (message: string) => {
        this.logger.error(message);
    };
}
