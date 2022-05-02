import { SubscriptionsOnTimelinesCountAggregate } from "../outputs/SubscriptionsOnTimelinesCountAggregate";
import { SubscriptionsOnTimelinesMaxAggregate } from "../outputs/SubscriptionsOnTimelinesMaxAggregate";
import { SubscriptionsOnTimelinesMinAggregate } from "../outputs/SubscriptionsOnTimelinesMinAggregate";
export declare class AggregateSubscriptionsOnTimelines {
    _count: SubscriptionsOnTimelinesCountAggregate | null;
    _min: SubscriptionsOnTimelinesMinAggregate | null;
    _max: SubscriptionsOnTimelinesMaxAggregate | null;
}
