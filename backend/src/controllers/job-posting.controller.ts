import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobPostingService } from '../services/job-posting.service';
import { JobPostingDTO } from '../dto/job-posting.dto';

@Controller('job-posting')
export class JobPostingController {
  constructor(private serv: JobPostingService) { }

  @Get()
  public async getAll(): Promise<JobPostingDTO[]> {
    return await this.serv.getAll()
  }

  @Post()
  public async post(@Body() dto: JobPostingDTO): Promise<JobPostingDTO> {
    return this.serv.create(dto);
  }

}