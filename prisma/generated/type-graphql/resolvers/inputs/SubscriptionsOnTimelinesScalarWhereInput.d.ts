import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SubscriptionsOnTimelinesScalarWhereInput {
    AND?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;
    OR?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;
    NOT?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    timelineId?: StringFilter | undefined;
    lastReadAt?: DateTimeFilter | undefined;
    type?: EnumSubscriptionTypeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
