import { BaseEntity } from './base.entity';
export declare class JobPosting extends BaseEntity {
    title: string;
    description: string;
    location: string;
    hourly_pay_rate: number;
}
