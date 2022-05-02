import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class VisionScalarWhereInput {
    AND?: VisionScalarWhereInput[] | undefined;
    OR?: VisionScalarWhereInput[] | undefined;
    NOT?: VisionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    activityDate?: DateTimeNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    referenceId?: StringNullableFilter | undefined;
    authorId?: StringNullableFilter | undefined;
    thumbnail?: StringNullableFilter | undefined;
    premiseId?: StringFilter | undefined;
    draftMode?: BoolFilter | undefined;
    prevVisionId?: StringNullableFilter | undefined;
}
