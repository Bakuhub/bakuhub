import { PremisesOnTimelinesOrderByRelationAggregateInput } from "../inputs/PremisesOnTimelinesOrderByRelationAggregateInput";
import { SubscriptionsOnPremisesOrderByRelationAggregateInput } from "../inputs/SubscriptionsOnPremisesOrderByRelationAggregateInput";
import { TagsOnPremisesOrderByRelationAggregateInput } from "../inputs/TagsOnPremisesOrderByRelationAggregateInput";
import { ThreadsOnPremiseOrderByRelationAggregateInput } from "../inputs/ThreadsOnPremiseOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
import { VotesOnPremiseOrderByRelationAggregateInput } from "../inputs/VotesOnPremiseOrderByRelationAggregateInput";
export declare class PremiseOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    vision?: VisionOrderByRelationAggregateInput | undefined;
    premisesOnTimelines?: PremisesOnTimelinesOrderByRelationAggregateInput | undefined;
    tagsOnPremises?: TagsOnPremisesOrderByRelationAggregateInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseOrderByRelationAggregateInput | undefined;
    votesOnPremise?: VotesOnPremiseOrderByRelationAggregateInput | undefined;
    SubscriptionsOnPremises?: SubscriptionsOnPremisesOrderByRelationAggregateInput | undefined;
}
