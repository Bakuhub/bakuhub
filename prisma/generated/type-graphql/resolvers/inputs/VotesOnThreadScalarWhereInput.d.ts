import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VotesOnThreadScalarWhereInput {
    AND?: VotesOnThreadScalarWhereInput[] | undefined;
    OR?: VotesOnThreadScalarWhereInput[] | undefined;
    NOT?: VotesOnThreadScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    threadId?: StringFilter | undefined;
    vote?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
