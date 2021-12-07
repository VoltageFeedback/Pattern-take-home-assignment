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

  public static from(dto: Partial<JobPostingDTO>) {
    const it = new JobPostingDTO();
    it.id = dto.id;
    it.title = dto.title;
    it.description = dto.description;
    it.location = dto.location;
    it.hourly_pay_rate = dto.hourly_pay_rate;
    return it;
  }

  public static fromEntity(entity: JobPosting) {
    return this.from({
      id: entity.id,
      title: entity.title,
      description: entity.description,
      location: entity.location,
      hourly_pay_rate: entity.hourly_pay_rate
    });
  }

  public static toEntity(dto: Partial<JobPostingDTO>) {
    const it = new JobPosting();
    // it.id = dto.id;
    it.title = dto.title;;
    it.description = dto.description;
    it.location = dto.location;
    it.hourly_pay_rate = dto.hourly_pay_rate;
    it.create_at = new Date();
    it.update_at = new Date();
    return it;
  }
}