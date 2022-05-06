import { ReferenceCountAggregate } from "../outputs/ReferenceCountAggregate";
import { ReferenceMaxAggregate } from "../outputs/ReferenceMaxAggregate";
import { ReferenceMinAggregate } from "../outputs/ReferenceMinAggregate";
export declare class AggregateReference {
    _count: ReferenceCountAggregate | null;
    _min: ReferenceMinAggregate | null;
    _max: ReferenceMaxAggregate | null;
}
