import { ThreadsOnTimelineOrderByWithAggregationInput } from "../../../inputs/ThreadsOnTimelineOrderByWithAggregationInput";
import { ThreadsOnTimelineScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnTimelineScalarWhereWithAggregatesInput";
import { ThreadsOnTimelineWhereInput } from "../../../inputs/ThreadsOnTimelineWhereInput";
export declare class GroupByThreadsOnTimelineArgs {
    where?: ThreadsOnTimelineWhereInput | undefined;
    orderBy?: ThreadsOnTimelineOrderByWithAggregationInput[] | undefined;
    by: Array<"threadId" | "timelineId" | "assignedAt">;
    having?: ThreadsOnTimelineScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
