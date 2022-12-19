import { Module } from '@nestjs/common';
import { AditionalsController } from './aditionals.controller';
import { AditionalsService } from './aditionals.service';

@Module({
  controllers: [AditionalsController],
  providers: [AditionalsService]
})
export class AditionalsModule {}
