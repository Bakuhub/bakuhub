import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionWithAggregatesFilter } from "../inputs/EnumReactionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReactionOnVisionsScalarWhereWithAggregatesInput {
    AND?: ReactionOnVisionsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReactionOnVisionsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReactionOnVisionsScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    visionId?: StringWithAggregatesFilter | undefined;
    reaction?: EnumReactionWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
