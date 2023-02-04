import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /// `NestFactory` crete and start an instance of the Nest.js application 
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
