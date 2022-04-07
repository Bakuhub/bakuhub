import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { TimelineOrderByWithRelationInput } from "../inputs/TimelineOrderByWithRelationInput";
export declare class PremisesOnTimelinesOrderByWithRelationInput {
    timeline?: TimelineOrderByWithRelationInput | undefined;
    timelineId?: "asc" | "desc" | undefined;
    premise?: PremiseOrderByWithRelationInput | undefined;
    premiseId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
