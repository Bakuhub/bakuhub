import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ReactionOnThreadsWhereInput {
    AND?: ReactionOnThreadsWhereInput[] | undefined;
    OR?: ReactionOnThreadsWhereInput[] | undefined;
    NOT?: ReactionOnThreadsWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    thread?: ThreadRelationFilter | undefined;
    threadId?: StringFilter | undefined;
    reaction?: EnumReactionFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
