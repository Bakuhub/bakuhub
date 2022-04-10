import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class VotesOnThreadWhereInput {
    AND?: VotesOnThreadWhereInput[] | undefined;
    OR?: VotesOnThreadWhereInput[] | undefined;
    NOT?: VotesOnThreadWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    thread?: ThreadRelationFilter | undefined;
    threadId?: StringFilter | undefined;
    vote?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
