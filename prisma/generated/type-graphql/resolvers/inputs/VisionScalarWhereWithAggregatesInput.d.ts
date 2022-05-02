import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VisionScalarWhereWithAggregatesInput {
    AND?: VisionScalarWhereWithAggregatesInput[] | undefined;
    OR?: VisionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VisionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    activityDate?: DateTimeNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    referenceId?: StringNullableWithAggregatesFilter | undefined;
    authorId?: StringNullableWithAggregatesFilter | undefined;
    thumbnail?: StringNullableWithAggregatesFilter | undefined;
    premiseId?: StringWithAggregatesFilter | undefined;
    draftMode?: BoolWithAggregatesFilter | undefined;
    prevVisionId?: StringNullableWithAggregatesFilter | undefined;
}
