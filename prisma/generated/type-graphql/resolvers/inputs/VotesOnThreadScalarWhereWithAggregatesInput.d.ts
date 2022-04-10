import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VotesOnThreadScalarWhereWithAggregatesInput {
    AND?: VotesOnThreadScalarWhereWithAggregatesInput[] | undefined;
    OR?: VotesOnThreadScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VotesOnThreadScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    threadId?: StringWithAggregatesFilter | undefined;
    vote?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
