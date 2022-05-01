import { SupscriptionsOnTimelinesCountAggregate } from "../outputs/SupscriptionsOnTimelinesCountAggregate";
import { SupscriptionsOnTimelinesMaxAggregate } from "../outputs/SupscriptionsOnTimelinesMaxAggregate";
import { SupscriptionsOnTimelinesMinAggregate } from "../outputs/SupscriptionsOnTimelinesMinAggregate";
export declare class AggregateSupscriptionsOnTimelines {
    _count: SupscriptionsOnTimelinesCountAggregate | null;
    _min: SupscriptionsOnTimelinesMinAggregate | null;
    _max: SupscriptionsOnTimelinesMaxAggregate | null;
}
