import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSubscriptionTypeFilter } from "../inputs/EnumSubscriptionTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SupscriptionsOnTimelinesScalarWhereInput {
    AND?: SupscriptionsOnTimelinesScalarWhereInput[] | undefined;
    OR?: SupscriptionsOnTimelinesScalarWhereInput[] | undefined;
    NOT?: SupscriptionsOnTimelinesScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    timelineId?: StringFilter | undefined;
    type?: EnumSubscriptionTypeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
