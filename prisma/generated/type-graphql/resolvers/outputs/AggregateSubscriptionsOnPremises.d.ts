import { SubscriptionsOnPremisesCountAggregate } from "../outputs/SubscriptionsOnPremisesCountAggregate";
import { SubscriptionsOnPremisesMaxAggregate } from "../outputs/SubscriptionsOnPremisesMaxAggregate";
import { SubscriptionsOnPremisesMinAggregate } from "../outputs/SubscriptionsOnPremisesMinAggregate";
export declare class AggregateSubscriptionsOnPremises {
    _count: SubscriptionsOnPremisesCountAggregate | null;
    _min: SubscriptionsOnPremisesMinAggregate | null;
    _max: SubscriptionsOnPremisesMaxAggregate | null;
}
