import { ReferenceCountOrderByAggregateInput } from "../inputs/ReferenceCountOrderByAggregateInput";
import { ReferenceMaxOrderByAggregateInput } from "../inputs/ReferenceMaxOrderByAggregateInput";
import { ReferenceMinOrderByAggregateInput } from "../inputs/ReferenceMinOrderByAggregateInput";
export declare class ReferenceOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    _count?: ReferenceCountOrderByAggregateInput | undefined;
    _max?: ReferenceMaxOrderByAggregateInput | undefined;
    _min?: ReferenceMinOrderByAggregateInput | undefined;
}
