import { TagsOnPremisesOrderByRelationAggregateInput } from "../inputs/TagsOnPremisesOrderByRelationAggregateInput";
import { TagsOnTimelinesOrderByRelationAggregateInput } from "../inputs/TagsOnTimelinesOrderByRelationAggregateInput";
export declare class TagOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    label?: "asc" | "desc" | undefined;
    tagsOnPremises?: TagsOnPremisesOrderByRelationAggregateInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesOrderByRelationAggregateInput | undefined;
}
