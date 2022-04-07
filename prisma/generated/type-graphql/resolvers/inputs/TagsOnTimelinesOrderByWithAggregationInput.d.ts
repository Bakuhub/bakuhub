import { TagsOnTimelinesAvgOrderByAggregateInput } from "../inputs/TagsOnTimelinesAvgOrderByAggregateInput";
import { TagsOnTimelinesCountOrderByAggregateInput } from "../inputs/TagsOnTimelinesCountOrderByAggregateInput";
import { TagsOnTimelinesMaxOrderByAggregateInput } from "../inputs/TagsOnTimelinesMaxOrderByAggregateInput";
import { TagsOnTimelinesMinOrderByAggregateInput } from "../inputs/TagsOnTimelinesMinOrderByAggregateInput";
import { TagsOnTimelinesSumOrderByAggregateInput } from "../inputs/TagsOnTimelinesSumOrderByAggregateInput";
export declare class TagsOnTimelinesOrderByWithAggregationInput {
    tagId?: "asc" | "desc" | undefined;
    timelineId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
    _count?: TagsOnTimelinesCountOrderByAggregateInput | undefined;
    _avg?: TagsOnTimelinesAvgOrderByAggregateInput | undefined;
    _max?: TagsOnTimelinesMaxOrderByAggregateInput | undefined;
    _min?: TagsOnTimelinesMinOrderByAggregateInput | undefined;
    _sum?: TagsOnTimelinesSumOrderByAggregateInput | undefined;
}
