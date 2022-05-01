import { SupscriptionsOnTimelinesCountAggregate } from "../outputs/SupscriptionsOnTimelinesCountAggregate";
import { SupscriptionsOnTimelinesMaxAggregate } from "../outputs/SupscriptionsOnTimelinesMaxAggregate";
import { SupscriptionsOnTimelinesMinAggregate } from "../outputs/SupscriptionsOnTimelinesMinAggregate";
export declare class SupscriptionsOnTimelinesGroupBy {
    userId: string;
    timelineId: string;
    type: "AUTO" | "MANUAL";
    createdAt: Date;
    updatedAt: Date;
    _count: SupscriptionsOnTimelinesCountAggregate | null;
    _min: SupscriptionsOnTimelinesMinAggregate | null;
    _max: SupscriptionsOnTimelinesMaxAggregate | null;
}
