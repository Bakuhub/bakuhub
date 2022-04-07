import { ThreadsOnVisionCountAggregate } from "../outputs/ThreadsOnVisionCountAggregate";
import { ThreadsOnVisionMaxAggregate } from "../outputs/ThreadsOnVisionMaxAggregate";
import { ThreadsOnVisionMinAggregate } from "../outputs/ThreadsOnVisionMinAggregate";
export declare class ThreadsOnVisionGroupBy {
    threadId: string;
    visionId: string;
    assignedAt: Date;
    _count: ThreadsOnVisionCountAggregate | null;
    _min: ThreadsOnVisionMinAggregate | null;
    _max: ThreadsOnVisionMaxAggregate | null;
}
