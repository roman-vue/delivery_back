import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Configuration,
  ConfigurationsDocuments,
} from 'src/database/schemas/Configurations/configuration.schema';
import * as dayjs from 'dayjs';

@Injectable()
export class VerifyHourService {
  constructor(
    @InjectModel(Configuration.name)
    private readonly configurationModel: Model<ConfigurationsDocuments>,
  ) {}
  public async verifyHour() {
    const verify = await this.configurationModel.find();
    let config;
    let actualHour = dayjs();
    Logger.log(`VERIFY HOUR ${actualHour.format('HH:mm')}`);
    for (const iterator of verify) {
      if (
        actualHour.format('HH:mm') >= iterator.hourInit ||
        actualHour.format('HH:mm') <= iterator.hourEnd
      ) {
        Logger.verbose(`if the app is close`);
        config = iterator;
        config.openOrClose = false;
      }

      if (
        actualHour.format('HH:mm') == iterator.hourInit ||
        actualHour.format('HH:mm') >= iterator.hourEnd
      ) {
        Logger.verbose(`if the app is true`);
        config = iterator;
        config.openOrClose = true;
      }
    }
    const save = new this.configurationModel(config);
    await save.save();
    Logger.debug(`Update Open Or Close ${config.openOrClose}`);
  }
}
