import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MergeRequestRelationFilter } from "../inputs/MergeRequestRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
export declare class ThreadsOnMergeRequestWhereInput {
    AND?: ThreadsOnMergeRequestWhereInput[] | undefined;
    OR?: ThreadsOnMergeRequestWhereInput[] | undefined;
    NOT?: ThreadsOnMergeRequestWhereInput[] | undefined;
    thread?: ThreadRelationFilter | undefined;
    threadId?: StringFilter | undefined;
    mergeRequest?: MergeRequestRelationFilter | undefined;
    mergeRequestId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
