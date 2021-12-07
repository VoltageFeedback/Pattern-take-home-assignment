import { Test, TestingModule } from '@nestjs/testing';
import { JobPostingController } from 'src/controllers/job-posting.controller';
import { JobPostingService } from 'src/services/job-posting.service';
import { JobPostingDTO } from 'src/dto/job-posting.dto';


describe("JobPostingController Unit Tests", () => {
  let jobPostingController: JobPostingController;
  let spyService: JobPostingService;
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: JobPostingService,
      useFactory: () => ({
        saveNote: jest.fn(() => []),
        findAllNotes: jest.fn(() => []),
        findOneNote: jest.fn(() => { }),
        updateNote: jest.fn(() => { }),
        deleteNote: jest.fn(() => { })
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JobPostingController],
      providers: [JobPostingService, ApiServiceProvider],
    }).compile();

    jobPostingController = app.get<JobPostingController>(JobPostingController);
    spyService = app.get<JobPostingService>(JobPostingService);
  })

  it("calling createJobPosting method", async () => {
    const dto = new JobPostingDTO();
    dto.title = "title test"
    dto.description = "description test"
    dto.location = "location test"
    dto.hourly_pay_rate = 100

    const res = await jobPostingController.createJobPosting(dto)
    expect(res).toBe(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  })

  it("calling updateJobPosting method", async () => {
    const dto = new JobPostingDTO();
    const inputId = 1
    dto.title = "title test2"

    const res = await jobPostingController.updateJobPosting(inputId, dto)
    expect(res.title).toBe(dto.title);
    expect(spyService.update).toHaveBeenCalled();
    expect(spyService.update).toHaveBeenCalledWith(inputId, dto);
  })

  it("calling getAll method", () => {
    jobPostingController.getAll();
    expect(spyService.findAll).toHaveBeenCalled();
  })

  it("calling getById method", async () => {
    const inputId = 1;
    
    const res = await jobPostingController.getById(inputId)
    expect(res.id).toBe(inputId);
    expect(spyService.findById).toHaveBeenCalled();
    expect(spyService.update).toHaveBeenCalledWith(inputId);
  })

  it("calling removeJobPosting method", async () => {
    const inputId = 1;
    
    const res = await jobPostingController.removeJobPosting(inputId)
    expect(spyService.remove).toHaveBeenCalled();
    expect(spyService.remove).toHaveBeenCalledWith(inputId);
  })

});