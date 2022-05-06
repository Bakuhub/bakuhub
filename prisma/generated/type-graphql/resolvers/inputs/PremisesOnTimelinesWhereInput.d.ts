import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
export declare class PremisesOnTimelinesWhereInput {
    AND?: PremisesOnTimelinesWhereInput[] | undefined;
    OR?: PremisesOnTimelinesWhereInput[] | undefined;
    NOT?: PremisesOnTimelinesWhereInput[] | undefined;
    timeline?: TimelineRelationFilter | undefined;
    timelineId?: StringFilter | undefined;
    premise?: PremiseRelationFilter | undefined;
    premiseId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
