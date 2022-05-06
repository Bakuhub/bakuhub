import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { ThreadOrderByWithRelationInput } from "../inputs/ThreadOrderByWithRelationInput";
export declare class ThreadsOnPremiseOrderByWithRelationInput {
    thread?: ThreadOrderByWithRelationInput | undefined;
    threadId?: "asc" | "desc" | undefined;
    premise?: PremiseOrderByWithRelationInput | undefined;
    premiseId?: "asc" | "desc" | undefined;
    assignedAt?: "asc" | "desc" | undefined;
}
