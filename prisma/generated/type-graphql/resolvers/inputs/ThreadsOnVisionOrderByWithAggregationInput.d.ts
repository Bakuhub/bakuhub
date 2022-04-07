import { ThreadsOnVisionCountOrderByAggregateInput } from "../inputs/ThreadsOnVisionCountOrderByAggregateInput";
import { ThreadsOnVisionMaxOrderByAggregateInput } from "../inputs/ThreadsOnVisionMaxOrderByAggregateInput";
import { ThreadsOnVisionMinOrderByAggregateInput } from "../inputs/ThreadsOnVisionMinOrderByAggregateInput";
export declare class ThreadsOnVisionOrderByWithAggregationInput {
    threadId?: "asc" | "desc" | undefined;
    visionId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: ThreadsOnVisionCountOrderByAggregateInput | undefined;
    _max?: ThreadsOnVisionMaxOrderByAggregateInput | undefined;
    _min?: ThreadsOnVisionMinOrderByAggregateInput | undefined;
}
