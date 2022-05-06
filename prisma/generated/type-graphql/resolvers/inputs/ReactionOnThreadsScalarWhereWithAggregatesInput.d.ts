import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionWithAggregatesFilter } from "../inputs/EnumReactionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReactionOnThreadsScalarWhereWithAggregatesInput {
    AND?: ReactionOnThreadsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReactionOnThreadsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReactionOnThreadsScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    threadId?: StringWithAggregatesFilter | undefined;
    reaction?: EnumReactionWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
