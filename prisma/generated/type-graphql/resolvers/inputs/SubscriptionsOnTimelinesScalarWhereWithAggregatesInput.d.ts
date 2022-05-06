import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSubscriptionTypeWithAggregatesFilter } from "../inputs/EnumSubscriptionTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SubscriptionsOnTimelinesScalarWhereWithAggregatesInput {
    AND?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    OR?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    timelineId?: StringWithAggregatesFilter | undefined;
    hasUnreadNotifications?: BoolWithAggregatesFilter | undefined;
    lastReadAt?: DateTimeWithAggregatesFilter | undefined;
    type?: EnumSubscriptionTypeWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
