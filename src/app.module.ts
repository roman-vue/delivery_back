import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './settings/logger/logger.module';
import { DatabaseModule } from './database/database.module';
import { MenuModule } from './modules/menu/menu.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AditionalsModule } from './modules/aditionals/aditionals.module';
import { JwtModule } from './jwt/jwt.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessGuard } from './guard/access-guard.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    LoggerModule,
    AdminModule,
    DatabaseModule,
    MenuModule,
    OrdersModule,
    AditionalsModule,
    JwtModule,
    AuthModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AccessGuard,
    },
  ],
})
export class AppModule {}
