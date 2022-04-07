import { ReactionOnVisionsCountOrderByAggregateInput } from "../inputs/ReactionOnVisionsCountOrderByAggregateInput";
import { ReactionOnVisionsMaxOrderByAggregateInput } from "../inputs/ReactionOnVisionsMaxOrderByAggregateInput";
import { ReactionOnVisionsMinOrderByAggregateInput } from "../inputs/ReactionOnVisionsMinOrderByAggregateInput";
export declare class ReactionOnVisionsOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    visionId?: "asc" | "desc" | undefined;
    reaction?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: ReactionOnVisionsCountOrderByAggregateInput | undefined;
    _max?: ReactionOnVisionsMaxOrderByAggregateInput | undefined;
    _min?: ReactionOnVisionsMinOrderByAggregateInput | undefined;
}
