import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ThreadScalarWhereInput {
    AND?: ThreadScalarWhereInput[] | undefined;
    OR?: ThreadScalarWhereInput[] | undefined;
    NOT?: ThreadScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    activityDate?: DateTimeNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    reference?: StringNullableFilter | undefined;
    authorId?: StringNullableFilter | undefined;
    parentThreadId?: StringNullableFilter | undefined;
}
