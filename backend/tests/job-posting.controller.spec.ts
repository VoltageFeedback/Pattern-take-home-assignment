import { Test, TestingModule } from '@nestjs/testing';
import { JobPostingController } from 'src/controllers/job-posting.controller';

describe('Job Posting Controller', () => {
  let controller: JobPostingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobPostingController],
    }).compile();

    controller = module.get<JobPostingController>(JobPostingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});