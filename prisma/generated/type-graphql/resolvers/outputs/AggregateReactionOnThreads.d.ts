import { ReactionOnThreadsCountAggregate } from "../outputs/ReactionOnThreadsCountAggregate";
import { ReactionOnThreadsMaxAggregate } from "../outputs/ReactionOnThreadsMaxAggregate";
import { ReactionOnThreadsMinAggregate } from "../outputs/ReactionOnThreadsMinAggregate";
export declare class AggregateReactionOnThreads {
    _count: ReactionOnThreadsCountAggregate | null;
    _min: ReactionOnThreadsMinAggregate | null;
    _max: ReactionOnThreadsMaxAggregate | null;
}
