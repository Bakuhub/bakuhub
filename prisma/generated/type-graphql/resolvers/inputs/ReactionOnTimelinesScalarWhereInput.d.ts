import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReactionOnTimelinesScalarWhereInput {
    AND?: ReactionOnTimelinesScalarWhereInput[] | undefined;
    OR?: ReactionOnTimelinesScalarWhereInput[] | undefined;
    NOT?: ReactionOnTimelinesScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    timelineId?: StringFilter | undefined;
    reaction?: EnumReactionFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
