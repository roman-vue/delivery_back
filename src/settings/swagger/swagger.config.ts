import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  public static swaggerConfig(app: any): void {
    const config = new DocumentBuilder()
      .setTitle(`agenda`)
      .setDescription(`Remaster Agenda`)
      .setVersion(`1.0`)
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/v1/agenda/docs', app, document, {
      swaggerOptions: {
        filter: true,
        showRequestDuration: true,
      },
    });
  }
}
