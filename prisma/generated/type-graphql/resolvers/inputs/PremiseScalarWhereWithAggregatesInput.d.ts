import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPremiseStatusWithAggregatesFilter } from "../inputs/EnumPremiseStatusWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PremiseScalarWhereWithAggregatesInput {
    AND?: PremiseScalarWhereWithAggregatesInput[] | undefined;
    OR?: PremiseScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PremiseScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    status?: EnumPremiseStatusWithAggregatesFilter | undefined;
    authorId?: StringNullableWithAggregatesFilter | undefined;
}
