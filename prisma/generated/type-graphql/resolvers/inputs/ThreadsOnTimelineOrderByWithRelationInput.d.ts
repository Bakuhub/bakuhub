import { ThreadOrderByWithRelationInput } from "../inputs/ThreadOrderByWithRelationInput";
import { TimelineOrderByWithRelationInput } from "../inputs/TimelineOrderByWithRelationInput";
export declare class ThreadsOnTimelineOrderByWithRelationInput {
    thread?: ThreadOrderByWithRelationInput | undefined;
    threadId?: "asc" | "desc" | undefined;
    timeline?: TimelineOrderByWithRelationInput | undefined;
    timelineId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
