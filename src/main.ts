import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './settings/interceptors/logger';
import { ResponseInterceptor } from './settings/interceptors/responses';
import { TimeoutInterceptor } from './settings/interceptors/timeout';
import { AllExceptionFilter } from './settings/filters/index.filter';
import { SwaggerConfig } from './settings/swagger/swagger.config';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from './settings/logger/logger.service';

async function bootstrap() {
  const configService = new ConfigService();
  const logger = new LoggerService();

  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(
    new LoggingInterceptor(logger),
    new ResponseInterceptor(),
    new TimeoutInterceptor(),
  );
  app.useGlobalFilters(new AllExceptionFilter(logger));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('api/v1/delivery/');

  SwaggerConfig.swaggerConfig(app);
  await app.listen(3000, () => {
    logger.verbose('APP', `is running on http://localhost:${3000}`);
    logger.verbose(
      'APP',
      `Swagger is running on http://localhost:${3000}/api/v1/delivery/docs`,
    );
  });
}
bootstrap();
