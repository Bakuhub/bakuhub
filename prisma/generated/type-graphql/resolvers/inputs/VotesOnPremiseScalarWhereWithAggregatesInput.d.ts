import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VotesOnPremiseScalarWhereWithAggregatesInput {
    AND?: VotesOnPremiseScalarWhereWithAggregatesInput[] | undefined;
    OR?: VotesOnPremiseScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VotesOnPremiseScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    premiseId?: StringWithAggregatesFilter | undefined;
    vote?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
