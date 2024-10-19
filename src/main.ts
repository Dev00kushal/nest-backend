import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
    await app.listen(3000);
  console.log(`This application is running on localhost ${process.env.HOST ?? 3000}`)
}
bootstrap();
