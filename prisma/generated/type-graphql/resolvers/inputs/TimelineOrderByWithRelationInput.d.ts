import { PremisesOnTimelinesOrderByRelationAggregateInput } from "../inputs/PremisesOnTimelinesOrderByRelationAggregateInput";
import { ReactionOnTimelinesOrderByRelationAggregateInput } from "../inputs/ReactionOnTimelinesOrderByRelationAggregateInput";
import { SupscriptionsOnTimelinesOrderByRelationAggregateInput } from "../inputs/SupscriptionsOnTimelinesOrderByRelationAggregateInput";
import { TagsOnTimelinesOrderByRelationAggregateInput } from "../inputs/TagsOnTimelinesOrderByRelationAggregateInput";
import { ThreadsOnTimelineOrderByRelationAggregateInput } from "../inputs/ThreadsOnTimelineOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VotesOnTimelineOrderByRelationAggregateInput } from "../inputs/VotesOnTimelineOrderByRelationAggregateInput";
export declare class TimelineOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    premisesOnTimelines?: PremisesOnTimelinesOrderByRelationAggregateInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesOrderByRelationAggregateInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineOrderByRelationAggregateInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesOrderByRelationAggregateInput | undefined;
    votesOnTimeline?: VotesOnTimelineOrderByRelationAggregateInput | undefined;
    SupscriptionsOnTimelines?: SupscriptionsOnTimelinesOrderByRelationAggregateInput | undefined;
}
