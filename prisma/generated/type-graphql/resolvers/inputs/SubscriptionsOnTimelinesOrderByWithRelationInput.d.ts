import { TimelineOrderByWithRelationInput } from "../inputs/TimelineOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class SubscriptionsOnTimelinesOrderByWithRelationInput {
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    timeline?: TimelineOrderByWithRelationInput | undefined;
    timelineId?: "asc" | "desc" | undefined;
    lastReadAt?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
