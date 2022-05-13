import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
export declare class VisionViewsHistoryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    visionId?: "asc" | "desc" | undefined;
    vision?: VisionOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
}
