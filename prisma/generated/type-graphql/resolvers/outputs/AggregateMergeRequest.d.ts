import { MergeRequestCountAggregate } from "../outputs/MergeRequestCountAggregate";
import { MergeRequestMaxAggregate } from "../outputs/MergeRequestMaxAggregate";
import { MergeRequestMinAggregate } from "../outputs/MergeRequestMinAggregate";
export declare class AggregateMergeRequest {
    _count: MergeRequestCountAggregate | null;
    _min: MergeRequestMinAggregate | null;
    _max: MergeRequestMaxAggregate | null;
}
