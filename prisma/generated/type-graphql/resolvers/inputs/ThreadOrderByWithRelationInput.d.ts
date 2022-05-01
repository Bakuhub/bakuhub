import { ReactionOnThreadsOrderByRelationAggregateInput } from "../inputs/ReactionOnThreadsOrderByRelationAggregateInput";
import { ThreadOrderByRelationAggregateInput } from "../inputs/ThreadOrderByRelationAggregateInput";
import { ThreadsOnMergeRequestOrderByWithRelationInput } from "../inputs/ThreadsOnMergeRequestOrderByWithRelationInput";
import { ThreadsOnPremiseOrderByWithRelationInput } from "../inputs/ThreadsOnPremiseOrderByWithRelationInput";
import { ThreadsOnTimelineOrderByWithRelationInput } from "../inputs/ThreadsOnTimelineOrderByWithRelationInput";
import { ThreadsOnVisionOrderByWithRelationInput } from "../inputs/ThreadsOnVisionOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VotesOnThreadOrderByRelationAggregateInput } from "../inputs/VotesOnThreadOrderByRelationAggregateInput";
export declare class ThreadOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    activityDate?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    reference?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    parentThreadId?: "asc" | "desc" | undefined;
    parentThread?: ThreadOrderByWithRelationInput | undefined;
    childThreads?: ThreadOrderByRelationAggregateInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseOrderByWithRelationInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineOrderByWithRelationInput | undefined;
    threadsOnVision?: ThreadsOnVisionOrderByWithRelationInput | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestOrderByWithRelationInput | undefined;
    ReactionOnThreads?: ReactionOnThreadsOrderByRelationAggregateInput | undefined;
    votesOnThread?: VotesOnThreadOrderByRelationAggregateInput | undefined;
}
