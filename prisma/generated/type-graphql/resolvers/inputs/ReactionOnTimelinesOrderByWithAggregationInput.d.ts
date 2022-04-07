import { ReactionOnTimelinesCountOrderByAggregateInput } from "../inputs/ReactionOnTimelinesCountOrderByAggregateInput";
import { ReactionOnTimelinesMaxOrderByAggregateInput } from "../inputs/ReactionOnTimelinesMaxOrderByAggregateInput";
import { ReactionOnTimelinesMinOrderByAggregateInput } from "../inputs/ReactionOnTimelinesMinOrderByAggregateInput";
export declare class ReactionOnTimelinesOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    timelineId?: "asc" | "desc" | undefined;
    reaction?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: ReactionOnTimelinesCountOrderByAggregateInput | undefined;
    _max?: ReactionOnTimelinesMaxOrderByAggregateInput | undefined;
    _min?: ReactionOnTimelinesMinOrderByAggregateInput | undefined;
}
