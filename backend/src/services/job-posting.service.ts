import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobPosting } from '../models/job-posting.entity';
import { Repository } from 'typeorm';
import { JobPostingDTO, CreateJobPostingDTO, UpdateJobPostingDTO } from '../dto/job-posting.dto';

@Injectable()
export class JobPostingService {
  constructor(
    @InjectRepository(JobPosting)
    private readonly jobPostingRepository: Repository<JobPosting>,
  ) {}

  public async findAll(): Promise<JobPosting[]> {
    return await this.jobPostingRepository.find();
  }


  public async findById(id: number): Promise<JobPosting | null> {
    return await this.jobPostingRepository.findOneOrFail(id);
  }

  public async create(dto: CreateJobPostingDTO): Promise<JobPosting> {
    return await this.jobPostingRepository.save(dto);
  }

  public async update(
    id: number,
    dto: UpdateJobPostingDTO,
  ): Promise<JobPosting | null> {
    const jobPosting = await this.jobPostingRepository.findOneOrFail(id);
    if (!jobPosting.id) {
      console.error("Job posting not found");
    }
    await this.jobPostingRepository.update(id, dto);
    return await this.jobPostingRepository.findOne(id);
  }

  public async remove(id: number): Promise<void> {
    await this.jobPostingRepository.delete(id);
  }
}

