import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ThreadsOnMergeRequestScalarWhereInput {
    AND?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;
    OR?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;
    NOT?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;
    threadId?: StringFilter | undefined;
    mergeRequestId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
