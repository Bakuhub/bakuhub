import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagsOnPremisesListRelationFilter } from "../inputs/TagsOnPremisesListRelationFilter";
import { TagsOnTimelinesListRelationFilter } from "../inputs/TagsOnTimelinesListRelationFilter";
import { TagsOnVisionsListRelationFilter } from "../inputs/TagsOnVisionsListRelationFilter";
export declare class TagWhereInput {
    AND?: TagWhereInput[] | undefined;
    OR?: TagWhereInput[] | undefined;
    NOT?: TagWhereInput[] | undefined;
    id?: IntFilter | undefined;
    label?: StringFilter | undefined;
    tagsOnPremises?: TagsOnPremisesListRelationFilter | undefined;
    tagsOnVisions?: TagsOnVisionsListRelationFilter | undefined;
    tagsOnTimelines?: TagsOnTimelinesListRelationFilter | undefined;
}
