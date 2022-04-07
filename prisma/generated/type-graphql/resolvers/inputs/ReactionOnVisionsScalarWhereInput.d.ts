import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReactionOnVisionsScalarWhereInput {
    AND?: ReactionOnVisionsScalarWhereInput[] | undefined;
    OR?: ReactionOnVisionsScalarWhereInput[] | undefined;
    NOT?: ReactionOnVisionsScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    visionId?: StringFilter | undefined;
    reaction?: EnumReactionFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
