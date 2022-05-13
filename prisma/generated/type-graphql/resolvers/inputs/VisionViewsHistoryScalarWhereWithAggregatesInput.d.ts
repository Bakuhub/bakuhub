import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VisionViewsHistoryScalarWhereWithAggregatesInput {
    AND?: VisionViewsHistoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: VisionViewsHistoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VisionViewsHistoryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    visionId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
