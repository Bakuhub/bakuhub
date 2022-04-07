import { ThreadCountAggregate } from "../outputs/ThreadCountAggregate";
import { ThreadMaxAggregate } from "../outputs/ThreadMaxAggregate";
import { ThreadMinAggregate } from "../outputs/ThreadMinAggregate";
export declare class AggregateThread {
    _count: ThreadCountAggregate | null;
    _min: ThreadMinAggregate | null;
    _max: ThreadMaxAggregate | null;
}
