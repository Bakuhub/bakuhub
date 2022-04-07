import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ThreadsOnTimelineScalarWhereInput {
    AND?: ThreadsOnTimelineScalarWhereInput[] | undefined;
    OR?: ThreadsOnTimelineScalarWhereInput[] | undefined;
    NOT?: ThreadsOnTimelineScalarWhereInput[] | undefined;
    threadId?: StringFilter | undefined;
    timelineId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
