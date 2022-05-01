import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VotesOnVisionScalarWhereWithAggregatesInput {
    AND?: VotesOnVisionScalarWhereWithAggregatesInput[] | undefined;
    OR?: VotesOnVisionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VotesOnVisionScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    visionId?: StringWithAggregatesFilter | undefined;
    vote?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
