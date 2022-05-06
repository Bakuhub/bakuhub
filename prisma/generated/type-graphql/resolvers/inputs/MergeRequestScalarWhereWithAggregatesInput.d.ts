import { EnumMergeRequestStatusWithAggregatesFilter } from "../inputs/EnumMergeRequestStatusWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MergeRequestScalarWhereWithAggregatesInput {
    AND?: MergeRequestScalarWhereWithAggregatesInput[] | undefined;
    OR?: MergeRequestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MergeRequestScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    status?: EnumMergeRequestStatusWithAggregatesFilter | undefined;
    visionId?: StringWithAggregatesFilter | undefined;
}
