import { MergeRequestCountOrderByAggregateInput } from "../inputs/MergeRequestCountOrderByAggregateInput";
import { MergeRequestMaxOrderByAggregateInput } from "../inputs/MergeRequestMaxOrderByAggregateInput";
import { MergeRequestMinOrderByAggregateInput } from "../inputs/MergeRequestMinOrderByAggregateInput";
export declare class MergeRequestOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    visionId?: "asc" | "desc" | undefined;
    _count?: MergeRequestCountOrderByAggregateInput | undefined;
    _max?: MergeRequestMaxOrderByAggregateInput | undefined;
    _min?: MergeRequestMinOrderByAggregateInput | undefined;
}
