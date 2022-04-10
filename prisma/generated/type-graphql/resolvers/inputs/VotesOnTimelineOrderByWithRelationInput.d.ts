import { TimelineOrderByWithRelationInput } from "../inputs/TimelineOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class VotesOnTimelineOrderByWithRelationInput {
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    timeline?: TimelineOrderByWithRelationInput | undefined;
    timelineId?: "asc" | "desc" | undefined;
    vote?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
}
