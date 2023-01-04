import { ConfigService } from '@nestjs/config';
import {
  AllExceptionFilter,
  LoggerService,
  LoggingInterceptor,
  ResponseInterceptor,
  SwaggerConfig,
  TimeoutInterceptor,
} from './settings';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AccessGuard } from './guard/access-guard.guard';

async function bootstrap() {
  const configService = new ConfigService();
  const logger = new LoggerService();

  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(
    new LoggingInterceptor(logger),
    new ResponseInterceptor(),
    new TimeoutInterceptor(),
  );
  // app.useGlobalGuards(new AccessGuard());
  app.useGlobalFilters(new AllExceptionFilter(logger));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('api/v1/delivery/');

  SwaggerConfig.swaggerConfig(app);
  let PORT = 3000;
  await app.listen(PORT, () => {
    logger.verbose('APP', `is running on http://localhost:${PORT}`);
    logger.verbose(
      'APP',
      `Swagger is running on http://localhost:${PORT}/api/v1/delivery/docs`,
    );
  });
}
bootstrap();
