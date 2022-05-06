import { MergeRequestOrderByWithRelationInput } from "../inputs/MergeRequestOrderByWithRelationInput";
import { ThreadOrderByWithRelationInput } from "../inputs/ThreadOrderByWithRelationInput";
export declare class ThreadsOnMergeRequestOrderByWithRelationInput {
    thread?: ThreadOrderByWithRelationInput | undefined;
    threadId?: "asc" | "desc" | undefined;
    mergeRequest?: MergeRequestOrderByWithRelationInput | undefined;
    mergeRequestId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
