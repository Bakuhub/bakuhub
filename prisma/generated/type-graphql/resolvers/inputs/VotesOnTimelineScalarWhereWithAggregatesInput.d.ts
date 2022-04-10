import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VotesOnTimelineScalarWhereWithAggregatesInput {
    AND?: VotesOnTimelineScalarWhereWithAggregatesInput[] | undefined;
    OR?: VotesOnTimelineScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VotesOnTimelineScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    timelineId?: StringWithAggregatesFilter | undefined;
    vote?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
