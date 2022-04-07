import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReactionOnThreadsScalarWhereInput {
    AND?: ReactionOnThreadsScalarWhereInput[] | undefined;
    OR?: ReactionOnThreadsScalarWhereInput[] | undefined;
    NOT?: ReactionOnThreadsScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    threadId?: StringFilter | undefined;
    reaction?: EnumReactionFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
