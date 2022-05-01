import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSubscriptionTypeWithAggregatesFilter } from "../inputs/EnumSubscriptionTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SupscriptionsOnTimelinesScalarWhereWithAggregatesInput {
    AND?: SupscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    OR?: SupscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SupscriptionsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    timelineId?: StringWithAggregatesFilter | undefined;
    type?: EnumSubscriptionTypeWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
