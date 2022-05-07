import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
export declare class TagsOnVisionsOrderByWithRelationInput {
    tag?: TagOrderByWithRelationInput | undefined;
    tagId?: "asc" | "desc" | undefined;
    vision?: VisionOrderByWithRelationInput | undefined;
    visionId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
