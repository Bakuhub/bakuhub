import { ReactionOnVisionsCountAggregate } from "../outputs/ReactionOnVisionsCountAggregate";
import { ReactionOnVisionsMaxAggregate } from "../outputs/ReactionOnVisionsMaxAggregate";
import { ReactionOnVisionsMinAggregate } from "../outputs/ReactionOnVisionsMinAggregate";
export declare class AggregateReactionOnVisions {
    _count: ReactionOnVisionsCountAggregate | null;
    _min: ReactionOnVisionsMinAggregate | null;
    _max: ReactionOnVisionsMaxAggregate | null;
}
