import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";
export declare class ReactionOnVisionsWhereInput {
    AND?: ReactionOnVisionsWhereInput[] | undefined;
    OR?: ReactionOnVisionsWhereInput[] | undefined;
    NOT?: ReactionOnVisionsWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    vision?: VisionRelationFilter | undefined;
    visionId?: StringFilter | undefined;
    reaction?: EnumReactionFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
