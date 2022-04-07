import { PremisesOnTimelinesCountOrderByAggregateInput } from "../inputs/PremisesOnTimelinesCountOrderByAggregateInput";
import { PremisesOnTimelinesMaxOrderByAggregateInput } from "../inputs/PremisesOnTimelinesMaxOrderByAggregateInput";
import { PremisesOnTimelinesMinOrderByAggregateInput } from "../inputs/PremisesOnTimelinesMinOrderByAggregateInput";
export declare class PremisesOnTimelinesOrderByWithAggregationInput {
    timelineId?: "asc" | "desc" | undefined;
    premiseId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: PremisesOnTimelinesCountOrderByAggregateInput | undefined;
    _max?: PremisesOnTimelinesMaxOrderByAggregateInput | undefined;
    _min?: PremisesOnTimelinesMinOrderByAggregateInput | undefined;
}
