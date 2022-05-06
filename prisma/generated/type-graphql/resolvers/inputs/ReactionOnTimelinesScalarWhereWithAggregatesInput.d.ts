import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionWithAggregatesFilter } from "../inputs/EnumReactionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReactionOnTimelinesScalarWhereWithAggregatesInput {
    AND?: ReactionOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReactionOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReactionOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    timelineId?: StringWithAggregatesFilter | undefined;
    reaction?: EnumReactionWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
