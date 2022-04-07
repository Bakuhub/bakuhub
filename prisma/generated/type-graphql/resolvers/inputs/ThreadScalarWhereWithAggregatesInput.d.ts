import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ThreadScalarWhereWithAggregatesInput {
    AND?: ThreadScalarWhereWithAggregatesInput[] | undefined;
    OR?: ThreadScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ThreadScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    activityDate?: DateTimeNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    reference?: StringNullableWithAggregatesFilter | undefined;
    authorId?: StringNullableWithAggregatesFilter | undefined;
    parentThreadId?: StringNullableWithAggregatesFilter | undefined;
}
