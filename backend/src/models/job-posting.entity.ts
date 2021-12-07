import { Entity, Column, Timestamp } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'job-posting' })
export class JobPosting extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  location: string;

  @Column({ type: Number})
  hourly_pay_rate: number;
}