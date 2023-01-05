import { Module } from '@nestjs/common';
import { VerifyHourController } from './verify-hour.controller';
import { VerifyHourService } from './verify-hour.service';
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
  controllers: [VerifyHourController],
  providers: [VerifyHourService],
})
export class VerifyHourModule {}
