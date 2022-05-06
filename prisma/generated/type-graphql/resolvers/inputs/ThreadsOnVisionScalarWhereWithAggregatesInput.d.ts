import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ThreadsOnVisionScalarWhereWithAggregatesInput {
    AND?: ThreadsOnVisionScalarWhereWithAggregatesInput[] | undefined;
    OR?: ThreadsOnVisionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ThreadsOnVisionScalarWhereWithAggregatesInput[] | undefined;
    threadId?: StringWithAggregatesFilter | undefined;
    visionId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
