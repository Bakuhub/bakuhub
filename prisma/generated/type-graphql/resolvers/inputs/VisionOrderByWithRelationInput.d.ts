import { MergeRequestOrderByWithRelationInput } from "../inputs/MergeRequestOrderByWithRelationInput";
import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { ReactionOnVisionsOrderByRelationAggregateInput } from "../inputs/ReactionOnVisionsOrderByRelationAggregateInput";
import { ReferenceOrderByWithRelationInput } from "../inputs/ReferenceOrderByWithRelationInput";
import { ThreadsOnVisionOrderByRelationAggregateInput } from "../inputs/ThreadsOnVisionOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
export declare class VisionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    activityDate?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    reference?: ReferenceOrderByWithRelationInput | undefined;
    referenceId?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    premise?: PremiseOrderByWithRelationInput | undefined;
    thumbnail?: "asc" | "desc" | undefined;
    premiseId?: "asc" | "desc" | undefined;
    draftMode?: "asc" | "desc" | undefined;
    prevVisionId?: "asc" | "desc" | undefined;
    prevVision?: VisionOrderByWithRelationInput | undefined;
    nextVisions?: VisionOrderByRelationAggregateInput | undefined;
    threadsOnVision?: ThreadsOnVisionOrderByRelationAggregateInput | undefined;
    mergeRequest?: MergeRequestOrderByWithRelationInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsOrderByRelationAggregateInput | undefined;
}
