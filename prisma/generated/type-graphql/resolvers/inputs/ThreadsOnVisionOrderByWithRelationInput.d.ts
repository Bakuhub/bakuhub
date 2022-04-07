import { ThreadOrderByWithRelationInput } from "../inputs/ThreadOrderByWithRelationInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
export declare class ThreadsOnVisionOrderByWithRelationInput {
    thread?: ThreadOrderByWithRelationInput | undefined;
    threadId?: "asc" | "desc" | undefined;
    vision?: VisionOrderByWithRelationInput | undefined;
    visionId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
