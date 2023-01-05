import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConfigurationsService } from './configurations.service';
import { HoursDto } from './input/hours.dto';
@ApiTags('CONFIGURATIONS')
@ApiBearerAuth()
@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  @Post('new/:hourInit/:hourEnd')
  public async configurationsApp(
    @Param('hourInit') hourInit: string,
    @Param('hourEnd') hourEnd: string,
  ) {
    const data = await this.configurationsService.configurationdd(
      hourInit,
      hourEnd,
    );
    return data;
  }

  @Patch('changes-status-app/:paramOpenOrClose')
  public async updatedConfigurations(
    @Param('paramOpenOrClose') paramOpenOrClose: boolean,
  ) {
    const data = await this.configurationsService.changesStatus(
      paramOpenOrClose,
    );
    return data;
  }

  @Get('get-configuration')
  public async getConfigurations() {
    const data = await this.configurationsService.getConfig();
    return data;
  }

  @Put('updated/:idConfigurations/:hourInit/:hourEnd')
  public async updated(
    @Param('idConfigurations') idConfigurations: string,
    @Param('hourInit') hourInit: string,
    @Param('hourEnd') hourEnd: string,
  ) {
    const data = await this.configurationsService.updated(
      idConfigurations,
      hourInit,
      hourEnd,
    );
    return data;
  }
}
