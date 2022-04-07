import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
export declare class TagsOnPremisesWhereInput {
    AND?: TagsOnPremisesWhereInput[] | undefined;
    OR?: TagsOnPremisesWhereInput[] | undefined;
    NOT?: TagsOnPremisesWhereInput[] | undefined;
    tag?: TagRelationFilter | undefined;
    tagId?: IntFilter | undefined;
    premise?: PremiseRelationFilter | undefined;
    premiseId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
