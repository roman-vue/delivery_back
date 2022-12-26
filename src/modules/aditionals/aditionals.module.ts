import { Module } from '@nestjs/common';
import { AditionalsController } from './aditionals.controller';
import { AditionalsService } from './aditionals.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Aditionals,
  AditionalsSchema,
} from 'src/database/schemas/Aditionals/aditionals.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Aditionals.name, schema: AditionalsSchema },
    ]),
  ],
  controllers: [AditionalsController],
  providers: [AditionalsService],
})
export class AditionalsModule {}
