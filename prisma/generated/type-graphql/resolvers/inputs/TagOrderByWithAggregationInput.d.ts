import { TagAvgOrderByAggregateInput } from "../inputs/TagAvgOrderByAggregateInput";
import { TagCountOrderByAggregateInput } from "../inputs/TagCountOrderByAggregateInput";
import { TagMaxOrderByAggregateInput } from "../inputs/TagMaxOrderByAggregateInput";
import { TagMinOrderByAggregateInput } from "../inputs/TagMinOrderByAggregateInput";
import { TagSumOrderByAggregateInput } from "../inputs/TagSumOrderByAggregateInput";
export declare class TagOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    label?: "asc" | "desc" | undefined;
    _count?: TagCountOrderByAggregateInput | undefined;
    _avg?: TagAvgOrderByAggregateInput | undefined;
    _max?: TagMaxOrderByAggregateInput | undefined;
    _min?: TagMinOrderByAggregateInput | undefined;
    _sum?: TagSumOrderByAggregateInput | undefined;
}
