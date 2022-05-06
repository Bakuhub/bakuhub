import { ReactionOnTimelinesCountAggregate } from "../outputs/ReactionOnTimelinesCountAggregate";
import { ReactionOnTimelinesMaxAggregate } from "../outputs/ReactionOnTimelinesMaxAggregate";
import { ReactionOnTimelinesMinAggregate } from "../outputs/ReactionOnTimelinesMinAggregate";
export declare class AggregateReactionOnTimelines {
    _count: ReactionOnTimelinesCountAggregate | null;
    _min: ReactionOnTimelinesMinAggregate | null;
    _max: ReactionOnTimelinesMaxAggregate | null;
}
