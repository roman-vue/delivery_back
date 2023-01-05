import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import {
  Configuration,
  ConfigurationsDocuments,
} from 'src/database/schemas/Configurations/configuration.schema';
import { HoursDto } from './input/hours.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class ConfigurationsService {
  constructor(
    @InjectModel(Configuration.name)
    private readonly configurationModel: Model<ConfigurationsDocuments>,
  ) {}
  public async configurationdd(hourInit: string, hourEnd: string) {
    const verify = await this.configurationModel.find();
    if (verify.length) {
      throw new ConflictException(`sorry only one configuration hour`);
    }
    let actualHour = dayjs();
    let openOrClose;
    if (
      actualHour.format('HH:mm') >= hourInit ||
      actualHour.format('HH:mm') <= hourEnd
    ) {
      openOrClose = false;
    }

    if (
      actualHour.format('HH:mm') <= hourInit ||
      actualHour.format('HH:mm') >= hourEnd
    ) {
      openOrClose = true;
    }

    const buildConfiguration = {
      hourInit,
      hourEnd,
      openOrClose,
    };

    const saveConfig = new this.configurationModel(buildConfiguration);
    const save = await saveConfig.save();
    return save;
  }

  public async changesStatus(paramOpenOrClose: boolean) {
    const find = await this.configurationModel.find();
    let config;
    for (const iterator of find) {
      iterator.openOrClose = paramOpenOrClose;
      config = iterator;
    }
    const changesStatus = new this.configurationModel(config);
    const save = changesStatus.save();
    return save;
  }

  public async getConfig() {
    const find = await this.configurationModel.find();
    return find;
  }

  public async updated(
    idConfigurations: string,
    hourInit: string,
    hourEnd: string,
  ) {
    const find = await this.configurationModel.findOne({
      id: idConfigurations,
    });

    find.hourInit = hourInit;
    find.hourEnd = hourEnd;

    const update = new this.configurationModel();
    const save = await update.save();
    return save;
  }
}
