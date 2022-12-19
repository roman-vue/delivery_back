import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseProvidersMongo } from './database.service';

@Module({
  imports: [DatabaseProvidersMongo],
  exports: [DatabaseProvidersMongo],
})
export class DatabaseModule {}
