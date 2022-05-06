import { ThreadsOnMergeRequestCountOrderByAggregateInput } from "../inputs/ThreadsOnMergeRequestCountOrderByAggregateInput";
import { ThreadsOnMergeRequestMaxOrderByAggregateInput } from "../inputs/ThreadsOnMergeRequestMaxOrderByAggregateInput";
import { ThreadsOnMergeRequestMinOrderByAggregateInput } from "../inputs/ThreadsOnMergeRequestMinOrderByAggregateInput";
export declare class ThreadsOnMergeRequestOrderByWithAggregationInput {
    threadId?: "asc" | "desc" | undefined;
    mergeRequestId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: ThreadsOnMergeRequestCountOrderByAggregateInput | undefined;
    _max?: ThreadsOnMergeRequestMaxOrderByAggregateInput | undefined;
    _min?: ThreadsOnMergeRequestMinOrderByAggregateInput | undefined;
}
