import { ThreadsOnPremiseCountOrderByAggregateInput } from "../inputs/ThreadsOnPremiseCountOrderByAggregateInput";
import { ThreadsOnPremiseMaxOrderByAggregateInput } from "../inputs/ThreadsOnPremiseMaxOrderByAggregateInput";
import { ThreadsOnPremiseMinOrderByAggregateInput } from "../inputs/ThreadsOnPremiseMinOrderByAggregateInput";
export declare class ThreadsOnPremiseOrderByWithAggregationInput {
    threadId?: "asc" | "desc" | undefined;
    premiseId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: ThreadsOnPremiseCountOrderByAggregateInput | undefined;
    _max?: ThreadsOnPremiseMaxOrderByAggregateInput | undefined;
    _min?: ThreadsOnPremiseMinOrderByAggregateInput | undefined;
}
