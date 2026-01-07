import { Body, Controller, HttpCode, Post, UseGuards, ValidationPipe } from '@nestjs/common';

import { AuthUserDecorator, JwtAuthGuard, Roles, RolesGuard, Scopes, ScopesGuard } from '../../common';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import { UserRoles, envConfig } from '../../config';
import { SkillEventRequestBodyDto } from '../../dto';
import * as skillEventsService from '../../services/SkillEventsService';
import { AuthUser as LegacyAuthUser } from '../../types';

@Controller('skill-events')
@UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
@Roles(UserRoles.Admin)
export class SkillEventsController {
  private readonly validationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: false,
  });

  @Post()
  @HttpCode(201)
  @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.CREATE, envConfig.SCOPES.UPDATE)
  async processSkillEvent(
    @AuthUserDecorator() user: AuthUser,
    @Body() rawBody: Record<string, unknown>,
  ) {
    const body = (await this.validationPipe.transform(rawBody, {
      type: 'body',
      metatype: SkillEventRequestBodyDto,
    })) as SkillEventRequestBodyDto;

    await skillEventsService.processSkillEvent(user as LegacyAuthUser, body);
    return {};
  }
}
