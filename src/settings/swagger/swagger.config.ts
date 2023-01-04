import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  public static swaggerConfig(app: any): void {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle(`DELIVERY`)
      .setDescription(`DELVY`)
      .setVersion(`v0.0.1`)
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/v1/delivery/docs', app, document, {
      swaggerOptions: {
        filter: true,
        showRequestDuration: true,
      },
    });
  }
}
