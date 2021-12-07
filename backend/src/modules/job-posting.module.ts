
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostingService } from '../services/job-posting.service';
import { JobPostingController } from '../controllers/job-posting.controller';
import { JobPosting } from '../models/job-posting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobPosting])],
  providers: [JobPostingService],
  controllers: [JobPostingController],
  exports: [
  ]
})
export class JobPostingModule { }