import { TimelineCountAggregate } from "../outputs/TimelineCountAggregate";
import { TimelineMaxAggregate } from "../outputs/TimelineMaxAggregate";
import { TimelineMinAggregate } from "../outputs/TimelineMinAggregate";
export declare class TimelineGroupBy {
    id: string;
    title: string;
    description: string;
    status: string | null;
    authorId: string;
    _count: TimelineCountAggregate | null;
    _min: TimelineMinAggregate | null;
    _max: TimelineMaxAggregate | null;
}
