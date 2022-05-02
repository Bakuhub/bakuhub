import { SubscriptionsOnTimelinesCountAggregate } from "../outputs/SubscriptionsOnTimelinesCountAggregate";
import { SubscriptionsOnTimelinesMaxAggregate } from "../outputs/SubscriptionsOnTimelinesMaxAggregate";
import { SubscriptionsOnTimelinesMinAggregate } from "../outputs/SubscriptionsOnTimelinesMinAggregate";
export declare class SubscriptionsOnTimelinesGroupBy {
    userId: string;
    timelineId: string;
    hasUnreadNotifications: boolean;
    lastReadAt: Date;
    type: "AUTO" | "MANUAL";
    createdAt: Date;
    updatedAt: Date;
    _count: SubscriptionsOnTimelinesCountAggregate | null;
    _min: SubscriptionsOnTimelinesMinAggregate | null;
    _max: SubscriptionsOnTimelinesMaxAggregate | null;
}
