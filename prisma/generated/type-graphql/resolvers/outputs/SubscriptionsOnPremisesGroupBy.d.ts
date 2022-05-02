import { SubscriptionsOnPremisesCountAggregate } from "../outputs/SubscriptionsOnPremisesCountAggregate";
import { SubscriptionsOnPremisesMaxAggregate } from "../outputs/SubscriptionsOnPremisesMaxAggregate";
import { SubscriptionsOnPremisesMinAggregate } from "../outputs/SubscriptionsOnPremisesMinAggregate";
export declare class SubscriptionsOnPremisesGroupBy {
    userId: string;
    premiseId: string;
    hasUnreadNotifications: boolean;
    lastReadAt: Date;
    type: "AUTO" | "MANUAL";
    createdAt: Date;
    updatedAt: Date;
    _count: SubscriptionsOnPremisesCountAggregate | null;
    _min: SubscriptionsOnPremisesMinAggregate | null;
    _max: SubscriptionsOnPremisesMaxAggregate | null;
}
