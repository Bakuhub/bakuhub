import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SubscriptionsOnPremisesScalarWhereInput {
    AND?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;
    OR?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;
    NOT?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    premiseId?: StringFilter | undefined;
    lastReadAt?: DateTimeFilter | undefined;
    type?: EnumSubscriptionTypeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
