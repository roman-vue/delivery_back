import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VerifyHourService } from './verify-hour.service';
import { Cron, CronExpression } from '@nestjs/schedule/dist';

@ApiTags('CRON')
@Controller('verify-hour')
export class VerifyHourController {
  constructor(private readonly verifyHourService: VerifyHourService) {}
  @Get('exmple')
  @Cron(CronExpression.EVERY_6_HOURS)
  public async cronVerifyHour() {
    const data = await this.verifyHourService.verifyHour();
    return data;
  }
}
