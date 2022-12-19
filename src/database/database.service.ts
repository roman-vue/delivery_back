import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseProvidersMongo = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('URI_MONGO'),
    then: Logger.debug(configService.get<string>('URI_MONGO'), `DB =>`),
  }),
  inject: [ConfigService],
});
