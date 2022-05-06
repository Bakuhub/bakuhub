import { ThreadsOnMergeRequestCountAggregate } from "../outputs/ThreadsOnMergeRequestCountAggregate";
import { ThreadsOnMergeRequestMaxAggregate } from "../outputs/ThreadsOnMergeRequestMaxAggregate";
import { ThreadsOnMergeRequestMinAggregate } from "../outputs/ThreadsOnMergeRequestMinAggregate";
export declare class AggregateThreadsOnMergeRequest {
    _count: ThreadsOnMergeRequestCountAggregate | null;
    _min: ThreadsOnMergeRequestMinAggregate | null;
    _max: ThreadsOnMergeRequestMaxAggregate | null;
}
