import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PremisesOnTimelinesScalarWhereWithAggregatesInput {
    AND?: PremisesOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    OR?: PremisesOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PremisesOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    timelineId?: StringWithAggregatesFilter | undefined;
    premiseId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
