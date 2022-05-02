import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SubscriptionsOnPremisesWhereInput {
    AND?: SubscriptionsOnPremisesWhereInput[] | undefined;
    OR?: SubscriptionsOnPremisesWhereInput[] | undefined;
    NOT?: SubscriptionsOnPremisesWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    premise?: PremiseRelationFilter | undefined;
    premiseId?: StringFilter | undefined;
    lastReadAt?: DateTimeFilter | undefined;
    type?: EnumSubscriptionTypeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
