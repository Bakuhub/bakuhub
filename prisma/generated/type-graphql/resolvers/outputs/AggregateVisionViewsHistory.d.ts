import { VisionViewsHistoryCountAggregate } from "../outputs/VisionViewsHistoryCountAggregate";
import { VisionViewsHistoryMaxAggregate } from "../outputs/VisionViewsHistoryMaxAggregate";
import { VisionViewsHistoryMinAggregate } from "../outputs/VisionViewsHistoryMinAggregate";
export declare class AggregateVisionViewsHistory {
    _count: VisionViewsHistoryCountAggregate | null;
    _min: VisionViewsHistoryMinAggregate | null;
    _max: VisionViewsHistoryMaxAggregate | null;
}
