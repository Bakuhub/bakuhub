import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SupscriptionsOnTimelinesWhereInput {
    AND?: SupscriptionsOnTimelinesWhereInput[] | undefined;
    OR?: SupscriptionsOnTimelinesWhereInput[] | undefined;
    NOT?: SupscriptionsOnTimelinesWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    timeline?: TimelineRelationFilter | undefined;
    timelineId?: StringFilter | undefined;
    type?: EnumSubscriptionTypeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
