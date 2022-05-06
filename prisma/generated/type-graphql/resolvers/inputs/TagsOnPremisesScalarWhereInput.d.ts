import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TagsOnPremisesScalarWhereInput {
    AND?: TagsOnPremisesScalarWhereInput[] | undefined;
    OR?: TagsOnPremisesScalarWhereInput[] | undefined;
    NOT?: TagsOnPremisesScalarWhereInput[] | undefined;
    tagId?: IntFilter | undefined;
    premiseId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
