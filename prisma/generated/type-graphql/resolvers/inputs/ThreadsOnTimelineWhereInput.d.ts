import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
export declare class ThreadsOnTimelineWhereInput {
    AND?: ThreadsOnTimelineWhereInput[] | undefined;
    OR?: ThreadsOnTimelineWhereInput[] | undefined;
    NOT?: ThreadsOnTimelineWhereInput[] | undefined;
    thread?: ThreadRelationFilter | undefined;
    threadId?: StringFilter | undefined;
    timeline?: TimelineRelationFilter | undefined;
    timelineId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
