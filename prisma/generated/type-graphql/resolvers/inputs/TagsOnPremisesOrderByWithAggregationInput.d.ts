import { TagsOnPremisesAvgOrderByAggregateInput } from "../inputs/TagsOnPremisesAvgOrderByAggregateInput";
import { TagsOnPremisesCountOrderByAggregateInput } from "../inputs/TagsOnPremisesCountOrderByAggregateInput";
import { TagsOnPremisesMaxOrderByAggregateInput } from "../inputs/TagsOnPremisesMaxOrderByAggregateInput";
import { TagsOnPremisesMinOrderByAggregateInput } from "../inputs/TagsOnPremisesMinOrderByAggregateInput";
import { TagsOnPremisesSumOrderByAggregateInput } from "../inputs/TagsOnPremisesSumOrderByAggregateInput";
export declare class TagsOnPremisesOrderByWithAggregationInput {
    tagId?: "asc" | "desc" | undefined;
    premiseId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: TagsOnPremisesCountOrderByAggregateInput | undefined;
    _avg?: TagsOnPremisesAvgOrderByAggregateInput | undefined;
    _max?: TagsOnPremisesMaxOrderByAggregateInput | undefined;
    _min?: TagsOnPremisesMinOrderByAggregateInput | undefined;
    _sum?: TagsOnPremisesSumOrderByAggregateInput | undefined;
}
