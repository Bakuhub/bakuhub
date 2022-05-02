import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSubscriptionTypeWithAggregatesFilter } from "../inputs/EnumSubscriptionTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SubscriptionsOnPremisesScalarWhereWithAggregatesInput {
    AND?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput[] | undefined;
    OR?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    premiseId?: StringWithAggregatesFilter | undefined;
    lastReadAt?: DateTimeWithAggregatesFilter | undefined;
    type?: EnumSubscriptionTypeWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
