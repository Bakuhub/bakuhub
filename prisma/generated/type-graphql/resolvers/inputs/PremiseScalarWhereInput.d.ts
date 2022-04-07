import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumPremiseStatusFilter } from "../inputs/EnumPremiseStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PremiseScalarWhereInput {
    AND?: PremiseScalarWhereInput[] | undefined;
    OR?: PremiseScalarWhereInput[] | undefined;
    NOT?: PremiseScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeNullableFilter | undefined;
    status?: EnumPremiseStatusFilter | undefined;
    authorId?: StringNullableFilter | undefined;
}
