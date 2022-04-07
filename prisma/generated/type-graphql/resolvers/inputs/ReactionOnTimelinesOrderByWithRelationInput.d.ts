import { TimelineOrderByWithRelationInput } from "../inputs/TimelineOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ReactionOnTimelinesOrderByWithRelationInput {
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    timeline?: TimelineOrderByWithRelationInput | undefined;
    timelineId?: "asc" | "desc" | undefined;
    reaction?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
}
