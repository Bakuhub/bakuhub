import { TagsOnVisionsAvgOrderByAggregateInput } from "../inputs/TagsOnVisionsAvgOrderByAggregateInput";
import { TagsOnVisionsCountOrderByAggregateInput } from "../inputs/TagsOnVisionsCountOrderByAggregateInput";
import { TagsOnVisionsMaxOrderByAggregateInput } from "../inputs/TagsOnVisionsMaxOrderByAggregateInput";
import { TagsOnVisionsMinOrderByAggregateInput } from "../inputs/TagsOnVisionsMinOrderByAggregateInput";
import { TagsOnVisionsSumOrderByAggregateInput } from "../inputs/TagsOnVisionsSumOrderByAggregateInput";
export declare class TagsOnVisionsOrderByWithAggregationInput {
    tagId?: "asc" | "desc" | undefined;
    visionId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: TagsOnVisionsCountOrderByAggregateInput | undefined;
    _avg?: TagsOnVisionsAvgOrderByAggregateInput | undefined;
    _max?: TagsOnVisionsMaxOrderByAggregateInput | undefined;
    _min?: TagsOnVisionsMinOrderByAggregateInput | undefined;
    _sum?: TagsOnVisionsSumOrderByAggregateInput | undefined;
}
