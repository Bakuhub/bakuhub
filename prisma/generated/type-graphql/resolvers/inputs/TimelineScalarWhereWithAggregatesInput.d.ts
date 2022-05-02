import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TimelineScalarWhereWithAggregatesInput {
    AND?: TimelineScalarWhereWithAggregatesInput[] | undefined;
    OR?: TimelineScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TimelineScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    status?: StringWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
}