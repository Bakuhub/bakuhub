import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TimelineScalarWhereInput {
    AND?: TimelineScalarWhereInput[] | undefined;
    OR?: TimelineScalarWhereInput[] | undefined;
    NOT?: TimelineScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    status?: StringNullableFilter | undefined;
    authorId?: StringFilter | undefined;
}
