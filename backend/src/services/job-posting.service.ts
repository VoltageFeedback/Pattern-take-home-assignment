import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobPosting } from '../models/job-posting.entity';
import { Repository } from 'typeorm';
import { JobPostingDTO } from '../dto/job-posting.dto';

@Injectable()
export class JobPostingService {
  constructor(
    @InjectRepository(JobPosting) private readonly repo: Repository<JobPosting>,
  ) { }

  public async getAll(): Promise<JobPostingDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => JobPostingDTO.fromEntity(e)));
  }

  public async create(dto: JobPostingDTO): Promise<JobPostingDTO> {
    return this.repo.save(JobPostingDTO.toEntity(dto))
      .then(e => JobPostingDTO.fromEntity(e));
  }
}

