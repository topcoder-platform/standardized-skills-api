import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';

import { StandardizedSkillApiError } from '../../utils/errors';

@Catch(StandardizedSkillApiError)
export class StandardizedSkillExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(StandardizedSkillExceptionFilter.name);

  catch(exception: StandardizedSkillApiError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status = exception.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception.stack) {
      this.logger.error(exception.message, exception.stack);
    } else {
      this.logger.error(exception.message);
    }

    response.status(status).json({
      message: exception.message,
    });
  }
}
