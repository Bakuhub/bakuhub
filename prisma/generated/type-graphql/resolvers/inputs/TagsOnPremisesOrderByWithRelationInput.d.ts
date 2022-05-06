import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
export declare class TagsOnPremisesOrderByWithRelationInput {
    tag?: TagOrderByWithRelationInput | undefined;
    tagId?: "asc" | "desc" | undefined;
    premise?: PremiseOrderByWithRelationInput | undefined;
    premiseId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
