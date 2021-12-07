import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber} from 'class-validator';
import { JobPosting } from '../models/job-posting.entity';

export class JobPostingDTO implements Readonly<JobPostingDTO> {
  @ApiProperty({ required: true })
  @IsNumber()
  id: number;


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