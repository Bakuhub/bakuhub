import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ThreadsOnTimelineScalarWhereWithAggregatesInput {
    AND?: ThreadsOnTimelineScalarWhereWithAggregatesInput[] | undefined;
    OR?: ThreadsOnTimelineScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ThreadsOnTimelineScalarWhereWithAggregatesInput[] | undefined;
    threadId?: StringWithAggregatesFilter | undefined;
    timelineId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
