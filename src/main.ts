import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  app.enableVersioning({
    defaultVersion: '1',
    header: 'X-API-Version',
    type: VersioningType.HEADER,
  });
  await app.listen(3000);
}
bootstrap();
