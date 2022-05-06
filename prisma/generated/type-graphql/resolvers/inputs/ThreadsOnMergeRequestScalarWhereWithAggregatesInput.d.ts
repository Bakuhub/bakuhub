import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ThreadsOnMergeRequestScalarWhereWithAggregatesInput {
    AND?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput[] | undefined;
    OR?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput[] | undefined;
    threadId?: StringWithAggregatesFilter | undefined;
    mergeRequestId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
