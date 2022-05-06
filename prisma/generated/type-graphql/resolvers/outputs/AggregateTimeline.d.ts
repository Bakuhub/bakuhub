import { TimelineCountAggregate } from "../outputs/TimelineCountAggregate";
import { TimelineMaxAggregate } from "../outputs/TimelineMaxAggregate";
import { TimelineMinAggregate } from "../outputs/TimelineMinAggregate";
export declare class AggregateTimeline {
    _count: TimelineCountAggregate | null;
    _min: TimelineMinAggregate | null;
    _max: TimelineMaxAggregate | null;
}
