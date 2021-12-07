import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber} from 'class-validator';
import { JobPosting } from '../models/job-posting.entity';

export class JobPostingBaseDTO implements Readonly<JobPostingBaseDTO> {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsNumber()
  hourly_pay_rate: number;
}

export class CreateJobPostingDTO extends JobPostingBaseDTO {}

export class UpdateJobPostingDTO extends JobPostingBaseDTO {}

export class JobPostingDTO extends JobPostingBaseDTO {
  @ApiProperty({ required: true })
  @IsNumber()
  id: number;
}