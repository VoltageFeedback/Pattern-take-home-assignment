import { 
  Controller, Get, Post, Body, Param, Patch, Delete, HttpCode, HttpStatus, ValidationPipe,
  UsePipes
} from '@nestjs/common';
import { JobPostingService } from '../services/job-posting.service';
import { JobPostingDTO } from '../dto/job-posting.dto';

@Controller('/api/v1/job-posting')
export class JobPostingController {
  constructor(private serv: JobPostingService) { }

  @Get('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async getAll(): Promise<JobPostingDTO[]> {
    return await this.serv.findAll()
  }

  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async createJobPosting(@Body() dto: JobPostingDTO): Promise<JobPostingDTO> {
    return this.serv.create(dto);
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async getById(@Param('id') id: number) {
    return this.serv.findById(+id);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async updateJobPosting(@Param('id') id: number, @Body() dto: JobPostingDTO) {
    return this.serv.update(id, dto);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  public async removeJobPosting(@Param('id') id: number) {
    return this.serv.remove(id);
  }

}