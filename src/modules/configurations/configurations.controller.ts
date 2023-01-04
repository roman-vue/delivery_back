import { Controller, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConfigurationsService } from './configurations.service';
import { HoursDto } from './input/hours.dto';
@ApiTags('CONFIGURATIONS')
@ApiBearerAuth()
@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  @Post('configurations')
  public async configurationsApp(@Query() hoursDto: HoursDto) {}

  @Put('configurations/:idConfiguration')
  public async updatedConfigurations(
    @Param('idConfiguration') idConfiguration: string,
    @Query() hoursDto: HoursDto,
  ) {}
}
