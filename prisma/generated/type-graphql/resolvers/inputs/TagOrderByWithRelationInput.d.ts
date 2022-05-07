import { TagsOnPremisesOrderByRelationAggregateInput } from "../inputs/TagsOnPremisesOrderByRelationAggregateInput";
import { TagsOnTimelinesOrderByRelationAggregateInput } from "../inputs/TagsOnTimelinesOrderByRelationAggregateInput";
import { TagsOnVisionsOrderByRelationAggregateInput } from "../inputs/TagsOnVisionsOrderByRelationAggregateInput";
export declare class TagOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    label?: "asc" | "desc" | undefined;
    tagsOnPremises?: TagsOnPremisesOrderByRelationAggregateInput | undefined;
    tagsOnVisions?: TagsOnVisionsOrderByRelationAggregateInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesOrderByRelationAggregateInput | undefined;
}
