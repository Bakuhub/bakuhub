import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { PremiseOrderByRelationAggregateInput } from "../inputs/PremiseOrderByRelationAggregateInput";
import { ReactionOnThreadsOrderByRelationAggregateInput } from "../inputs/ReactionOnThreadsOrderByRelationAggregateInput";
import { ReactionOnTimelinesOrderByRelationAggregateInput } from "../inputs/ReactionOnTimelinesOrderByRelationAggregateInput";
import { ReactionOnVisionsOrderByRelationAggregateInput } from "../inputs/ReactionOnVisionsOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { ThreadOrderByRelationAggregateInput } from "../inputs/ThreadOrderByRelationAggregateInput";
import { TimelineOrderByRelationAggregateInput } from "../inputs/TimelineOrderByRelationAggregateInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    premises?: PremiseOrderByRelationAggregateInput | undefined;
    threads?: ThreadOrderByRelationAggregateInput | undefined;
    visions?: VisionOrderByRelationAggregateInput | undefined;
    timelines?: TimelineOrderByRelationAggregateInput | undefined;
    ReactionOnThreads?: ReactionOnThreadsOrderByRelationAggregateInput | undefined;
    ReactionOnTimelines?: ReactionOnTimelinesOrderByRelationAggregateInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsOrderByRelationAggregateInput | undefined;
}
