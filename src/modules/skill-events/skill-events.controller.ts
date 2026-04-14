import { Body, Controller, HttpCode, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthUserDecorator, JwtAuthGuard, Roles, RolesGuard, Scopes, ScopesGuard } from '../../common';
import { AuthUser } from '../../common/interfaces/auth-user.interface';
import { UserRoles, envConfig } from '../../config';
import { EmptyResponseDto, SkillEventRequestBodyDto } from '../../dto';
import { SkillEventsService } from './skill-events.service';

@Controller('skill-events')
@UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
@Roles(UserRoles.Admin)
@ApiTags('Skill Events')
@ApiBearerAuth()
export class SkillEventsController {
  constructor(private readonly skillEventsService: SkillEventsService) {}

  private readonly validationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: false,
  });

  @Post()
  @HttpCode(201)
  @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.CREATE, envConfig.SCOPES.UPDATE)
  @ApiOperation({ summary: 'Process skill event', description: 'Validates and processes skill event payloads from Kafka topics.' })
  @ApiBody({ type: SkillEventRequestBodyDto })
  @ApiCreatedResponse({ description: 'Event processed.', type: EmptyResponseDto })
  async processSkillEvent(
    @AuthUserDecorator() user: AuthUser,
    @Body() rawBody: Record<string, unknown>,
  ) {
    const body = (await this.validationPipe.transform(rawBody, {
      type: 'body',
      metatype: SkillEventRequestBodyDto,
    })) as SkillEventRequestBodyDto;

    await this.skillEventsService.processSkillEvent(user, body);
    return {};
  }
}
