import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";
export declare class TagsOnVisionsWhereInput {
    AND?: TagsOnVisionsWhereInput[] | undefined;
    OR?: TagsOnVisionsWhereInput[] | undefined;
    NOT?: TagsOnVisionsWhereInput[] | undefined;
    tag?: TagRelationFilter | undefined;
    tagId?: IntFilter | undefined;
    vision?: VisionRelationFilter | undefined;
    visionId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
