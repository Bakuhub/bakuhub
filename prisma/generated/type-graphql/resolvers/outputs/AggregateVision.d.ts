import { VisionCountAggregate } from "../outputs/VisionCountAggregate";
import { VisionMaxAggregate } from "../outputs/VisionMaxAggregate";
import { VisionMinAggregate } from "../outputs/VisionMinAggregate";
export declare class AggregateVision {
    _count: VisionCountAggregate | null;
    _min: VisionMinAggregate | null;
    _max: VisionMaxAggregate | null;
}
