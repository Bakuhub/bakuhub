import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
export declare class ReactionOnVisionsOrderByWithRelationInput {
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    vision?: VisionOrderByWithRelationInput | undefined;
    visionId?: "asc" | "desc" | undefined;
    reaction?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
}
