import { ThreadOrderByWithRelationInput } from "../inputs/ThreadOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ReactionOnThreadsOrderByWithRelationInput {
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    thread?: ThreadOrderByWithRelationInput | undefined;
    threadId?: "asc" | "desc" | undefined;
    reaction?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
}