import { ThreadsOnPremiseCountAggregate } from "../outputs/ThreadsOnPremiseCountAggregate";
import { ThreadsOnPremiseMaxAggregate } from "../outputs/ThreadsOnPremiseMaxAggregate";
import { ThreadsOnPremiseMinAggregate } from "../outputs/ThreadsOnPremiseMinAggregate";
export declare class AggregateThreadsOnPremise {
    _count: ThreadsOnPremiseCountAggregate | null;
    _min: ThreadsOnPremiseMinAggregate | null;
    _max: ThreadsOnPremiseMaxAggregate | null;
}
