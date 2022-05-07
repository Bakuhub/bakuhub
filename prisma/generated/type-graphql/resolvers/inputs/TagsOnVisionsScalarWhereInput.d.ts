import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TagsOnVisionsScalarWhereInput {
    AND?: TagsOnVisionsScalarWhereInput[] | undefined;
    OR?: TagsOnVisionsScalarWhereInput[] | undefined;
    NOT?: TagsOnVisionsScalarWhereInput[] | undefined;
    tagId?: IntFilter | undefined;
    visionId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
