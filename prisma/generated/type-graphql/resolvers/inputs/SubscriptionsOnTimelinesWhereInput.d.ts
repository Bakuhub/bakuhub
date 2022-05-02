import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SubscriptionsOnTimelinesWhereInput {
    AND?: SubscriptionsOnTimelinesWhereInput[] | undefined;
    OR?: SubscriptionsOnTimelinesWhereInput[] | undefined;
    NOT?: SubscriptionsOnTimelinesWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    timeline?: TimelineRelationFilter | undefined;
    timelineId?: StringFilter | undefined;
    hasUnreadNotifications?: BoolFilter | undefined;
    lastReadAt?: DateTimeFilter | undefined;
    type?: EnumSubscriptionTypeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
