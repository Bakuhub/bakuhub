import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class SubscriptionsOnPremisesOrderByWithRelationInput {
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    premise?: PremiseOrderByWithRelationInput | undefined;
    premiseId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
