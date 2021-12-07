import { 
  Controller, Get, Post, Body, Param, Patch, Delete, HttpCode, HttpStatus, ValidationPipe,
  UsePipes
} from '@nestjs/common';
import { JobPostingService } from '../services/job-posting.service';
import { JobPostingDTO, CreateJobPostingDTO, UpdateJobPostingDTO } from '../dto/job-posting.dto';

@Controller('/api/v1/job-posting')
export class JobPostingController {
  constructor(private serv: JobPostingService) { }

  @Get('/getAll')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async getAll(): Promise<JobPostingDTO[]> {
    return await this.serv.findAll()
  }

  @Post('/createJobPosting')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async createJobPosting(@Body() dto: CreateJobPostingDTO) {
    return this.serv.create(dto);
  }

  @Get('/getById:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async getById(@Param('id') id: number) {
    return this.serv.findById(+id);
  }

  @Patch('/updateJobPosting:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async updateJobPosting(@Param('id') id: number, @Body() dto: UpdateJobPostingDTO) {
    return this.serv.update(id, dto);
  }

  @Delete('/removeJobPosting:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async removeJobPosting(@Param('id') id: number) {
    return this.serv.remove(id);
  }

}