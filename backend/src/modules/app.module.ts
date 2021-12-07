import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { configService } from '../services/config.service';
import { JobPostingModule } from './job-posting.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    JobPostingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
