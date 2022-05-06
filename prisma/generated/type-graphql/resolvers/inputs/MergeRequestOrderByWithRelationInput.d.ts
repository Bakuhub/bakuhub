import { ThreadsOnMergeRequestOrderByRelationAggregateInput } from "../inputs/ThreadsOnMergeRequestOrderByRelationAggregateInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
export declare class MergeRequestOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    vision?: VisionOrderByWithRelationInput | undefined;
    visionId?: "asc" | "desc" | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestOrderByRelationAggregateInput | undefined;
}
