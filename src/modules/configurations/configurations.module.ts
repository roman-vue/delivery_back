import { Module } from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationsController } from './configurations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Configuration,
  ConfigurationSchema,
} from 'src/database/schemas/Configurations/configuration.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Configuration.name, schema: ConfigurationSchema },
    ]),
  ],
  providers: [ConfigurationsService],
  controllers: [ConfigurationsController],
  exports: [ConfigurationsService],
})
export class ConfigurationsModule {}
