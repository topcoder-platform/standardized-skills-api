import { Body, Controller, HttpCode, Param, Post, Req, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';

import { AuthUserDecorator, JwtAuthGuard, Roles, RolesGuard, Scopes, ScopesGuard } from '../../common';
import { AuthUser, AuthenticatedRequest } from '../../common/interfaces/auth-user.interface';
import { UserRoles, envConfig } from '../../config';
import { ChallengeIdRequestParamDto, EmptyResponseDto, JobIdRequestParamDto, WorkSkillsRequestBodyDto } from '../../dto';

// Reuse existing service logic implemented with Sequelize and legacy flows
import { createChallengeSkills, createJobSkills } from '../../services/WorkSkillsService';

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard, ScopesGuard)
@ApiTags('Work Skills')
@ApiBearerAuth()
export class WorkSkillsController {
    // POST /v5/standardized-skills/job-skills/:jobId
    @Post('job-skills/:jobId')
    @HttpCode(201)
    @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.CREATE, envConfig.SCOPES.UPDATE)
    @ApiOperation({ summary: 'Set job skills', description: 'Associates the given skills with a job or gig.' })
    @ApiParam({ name: 'jobId', description: 'Job identifier', format: 'uuid' })
    @ApiBody({ type: WorkSkillsRequestBodyDto })
    @ApiCreatedResponse({ description: 'Skills associated.', type: EmptyResponseDto })
    async setJobSkills(@Param() params: JobIdRequestParamDto, @Body() body: WorkSkillsRequestBodyDto) {
        await createJobSkills(params.jobId, body.skillIds);
        return {};
    }

    // POST /v5/standardized-skills/challenge-skills/:challengeId
    @Post('challenge-skills/:challengeId')
    @HttpCode(201)
    @Roles(UserRoles.Admin, UserRoles.Copilot, UserRoles.Manager, UserRoles.SelfServiceCustomer)
    @Scopes(envConfig.SCOPES.ALL, envConfig.SCOPES.CREATE, envConfig.SCOPES.UPDATE)
    @ApiOperation({ summary: 'Set challenge skills', description: 'Associates the given skills with a challenge.' })
    @ApiParam({ name: 'challengeId', description: 'Challenge identifier', format: 'uuid' })
    @ApiBody({ type: WorkSkillsRequestBodyDto })
    @ApiCreatedResponse({ description: 'Skills associated.', type: EmptyResponseDto })
    async setChallengeSkills(
        @Req() req: AuthenticatedRequest,
        @AuthUserDecorator() _user: AuthUser,
        @Param() params: ChallengeIdRequestParamDto,
        @Body() body: WorkSkillsRequestBodyDto,
    ) {
        const userToken = req.userToken as string | undefined;
        await createChallengeSkills(userToken, params.challengeId, body.skillIds);
        return {};
    }
}
