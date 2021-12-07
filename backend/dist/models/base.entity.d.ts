export declare abstract class BaseEntity {
    id: number;
    isActive: boolean;
    isArchived: boolean;
    create_at: Date;
    createdBy: string;
    update_at: Date;
    lastChangedBy: string;
    internalComment: string | null;
}
