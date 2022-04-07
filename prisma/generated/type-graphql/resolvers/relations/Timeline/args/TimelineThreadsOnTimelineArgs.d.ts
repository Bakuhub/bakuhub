import { ThreadsOnTimelineOrderByWithRelationInput } from "../../../inputs/ThreadsOnTimelineOrderByWithRelationInput";
import { ThreadsOnTimelineWhereInput } from "../../../inputs/ThreadsOnTimelineWhereInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../../../inputs/ThreadsOnTimelineWhereUniqueInput";
export declare class TimelineThreadsOnTimelineArgs {
    where?: ThreadsOnTimelineWhereInput | undefined;
    orderBy?: ThreadsOnTimelineOrderByWithRelationInput[] | undefined;
    cursor?: ThreadsOnTimelineWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"threadId" | "timelineId" | "assignedAt"> | undefined;
}
