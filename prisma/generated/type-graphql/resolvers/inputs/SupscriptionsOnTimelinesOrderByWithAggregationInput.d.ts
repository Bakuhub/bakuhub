import { SupscriptionsOnTimelinesCountOrderByAggregateInput } from "../inputs/SupscriptionsOnTimelinesCountOrderByAggregateInput";
import { SupscriptionsOnTimelinesMaxOrderByAggregateInput } from "../inputs/SupscriptionsOnTimelinesMaxOrderByAggregateInput";
import { SupscriptionsOnTimelinesMinOrderByAggregateInput } from "../inputs/SupscriptionsOnTimelinesMinOrderByAggregateInput";
export declare class SupscriptionsOnTimelinesOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    timelineId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SupscriptionsOnTimelinesCountOrderByAggregateInput | undefined;
    _max?: SupscriptionsOnTimelinesMaxOrderByAggregateInput | undefined;
    _min?: SupscriptionsOnTimelinesMinOrderByAggregateInput | undefined;
}
