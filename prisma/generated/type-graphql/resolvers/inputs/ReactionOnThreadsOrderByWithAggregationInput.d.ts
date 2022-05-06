import { ReactionOnThreadsCountOrderByAggregateInput } from "../inputs/ReactionOnThreadsCountOrderByAggregateInput";
import { ReactionOnThreadsMaxOrderByAggregateInput } from "../inputs/ReactionOnThreadsMaxOrderByAggregateInput";
import { ReactionOnThreadsMinOrderByAggregateInput } from "../inputs/ReactionOnThreadsMinOrderByAggregateInput";
export declare class ReactionOnThreadsOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    threadId?: "asc" | "desc" | undefined;
    reaction?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: ReactionOnThreadsCountOrderByAggregateInput | undefined;
    _max?: ReactionOnThreadsMaxOrderByAggregateInput | undefined;
    _min?: ReactionOnThreadsMinOrderByAggregateInput | undefined;
}
