import { PremiseCountOrderByAggregateInput } from "../inputs/PremiseCountOrderByAggregateInput";
import { PremiseMaxOrderByAggregateInput } from "../inputs/PremiseMaxOrderByAggregateInput";
import { PremiseMinOrderByAggregateInput } from "../inputs/PremiseMinOrderByAggregateInput";
export declare class PremiseOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    _count?: PremiseCountOrderByAggregateInput | undefined;
    _max?: PremiseMaxOrderByAggregateInput | undefined;
    _min?: PremiseMinOrderByAggregateInput | undefined;
}
