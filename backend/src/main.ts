import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import "reflect-metadata";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('Job Posting API')
    .setDescription('Job Posting API')
    .build());

  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}

bootstrap();
