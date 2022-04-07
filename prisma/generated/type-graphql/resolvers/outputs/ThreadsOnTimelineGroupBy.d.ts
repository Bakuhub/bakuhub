import { ThreadsOnTimelineCountAggregate } from "../outputs/ThreadsOnTimelineCountAggregate";
import { ThreadsOnTimelineMaxAggregate } from "../outputs/ThreadsOnTimelineMaxAggregate";
import { ThreadsOnTimelineMinAggregate } from "../outputs/ThreadsOnTimelineMinAggregate";
export declare class ThreadsOnTimelineGroupBy {
    threadId: string;
    timelineId: string;
    assignedAt: Date;
    _count: ThreadsOnTimelineCountAggregate | null;
    _min: ThreadsOnTimelineMinAggregate | null;
    _max: ThreadsOnTimelineMaxAggregate | null;
}
