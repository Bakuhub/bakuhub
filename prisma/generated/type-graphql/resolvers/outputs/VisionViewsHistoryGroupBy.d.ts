import { VisionViewsHistoryCountAggregate } from "../outputs/VisionViewsHistoryCountAggregate";
import { VisionViewsHistoryMaxAggregate } from "../outputs/VisionViewsHistoryMaxAggregate";
import { VisionViewsHistoryMinAggregate } from "../outputs/VisionViewsHistoryMinAggregate";
export declare class VisionViewsHistoryGroupBy {
    id: string;
    visionId: string;
    userId: string;
    createdAt: Date;
    _count: VisionViewsHistoryCountAggregate | null;
    _min: VisionViewsHistoryMinAggregate | null;
    _max: VisionViewsHistoryMaxAggregate | null;
}
