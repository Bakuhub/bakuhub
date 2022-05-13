import { VisionViewsHistoryCountOrderByAggregateInput } from "../inputs/VisionViewsHistoryCountOrderByAggregateInput";
import { VisionViewsHistoryMaxOrderByAggregateInput } from "../inputs/VisionViewsHistoryMaxOrderByAggregateInput";
import { VisionViewsHistoryMinOrderByAggregateInput } from "../inputs/VisionViewsHistoryMinOrderByAggregateInput";
export declare class VisionViewsHistoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    visionId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: VisionViewsHistoryCountOrderByAggregateInput | undefined;
    _max?: VisionViewsHistoryMaxOrderByAggregateInput | undefined;
    _min?: VisionViewsHistoryMinOrderByAggregateInput | undefined;
}
