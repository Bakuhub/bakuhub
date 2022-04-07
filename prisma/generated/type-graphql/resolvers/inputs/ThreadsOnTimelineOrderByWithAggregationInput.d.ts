import { ThreadsOnTimelineCountOrderByAggregateInput } from "../inputs/ThreadsOnTimelineCountOrderByAggregateInput";
import { ThreadsOnTimelineMaxOrderByAggregateInput } from "../inputs/ThreadsOnTimelineMaxOrderByAggregateInput";
import { ThreadsOnTimelineMinOrderByAggregateInput } from "../inputs/ThreadsOnTimelineMinOrderByAggregateInput";
export declare class ThreadsOnTimelineOrderByWithAggregationInput {
    threadId?: "asc" | "desc" | undefined;
    timelineId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: ThreadsOnTimelineCountOrderByAggregateInput | undefined;
    _max?: ThreadsOnTimelineMaxOrderByAggregateInput | undefined;
    _min?: ThreadsOnTimelineMinOrderByAggregateInput | undefined;
}
