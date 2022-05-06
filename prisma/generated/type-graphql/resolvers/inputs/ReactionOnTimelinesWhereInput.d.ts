import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ReactionOnTimelinesWhereInput {
    AND?: ReactionOnTimelinesWhereInput[] | undefined;
    OR?: ReactionOnTimelinesWhereInput[] | undefined;
    NOT?: ReactionOnTimelinesWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    timeline?: TimelineRelationFilter | undefined;
    timelineId?: StringFilter | undefined;
    reaction?: EnumReactionFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
