import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('Health')
export class HealthController {
    @ApiOperation({ summary: 'Health check', description: 'Returns service health status.' })
    @ApiOkResponse({ description: 'Service is reachable.', schema: { example: { status: 'UP' } } })
    @Get()
    getHealth(): { status: string } {
        return { status: 'UP' };
    }
}
