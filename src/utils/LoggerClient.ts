import { format, transports, createLogger, Logger } from 'winston';
import { Service } from 'typedi';
const { combine, timestamp, json, label } = format;

@Service()
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

    error = (message: string) => {
        this.logger.error(message);
    };
}
