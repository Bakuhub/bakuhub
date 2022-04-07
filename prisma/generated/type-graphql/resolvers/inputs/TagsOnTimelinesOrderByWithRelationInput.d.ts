import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { TimelineOrderByWithRelationInput } from "../inputs/TimelineOrderByWithRelationInput";
export declare class TagsOnTimelinesOrderByWithRelationInput {
    tag?: TagOrderByWithRelationInput | undefined;
    tagId?: "asc" | "desc" | undefined;
    timeline?: TimelineOrderByWithRelationInput | undefined;
    timelineId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
