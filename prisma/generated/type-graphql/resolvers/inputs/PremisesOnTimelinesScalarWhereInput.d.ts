import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PremisesOnTimelinesScalarWhereInput {
    AND?: PremisesOnTimelinesScalarWhereInput[] | undefined;
    OR?: PremisesOnTimelinesScalarWhereInput[] | undefined;
    NOT?: PremisesOnTimelinesScalarWhereInput[] | undefined;
    timelineId?: StringFilter | undefined;
    premiseId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
