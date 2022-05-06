import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { TimelineRelationFilter } from "../inputs/TimelineRelationFilter";
export declare class TagsOnTimelinesWhereInput {
    AND?: TagsOnTimelinesWhereInput[] | undefined;
    OR?: TagsOnTimelinesWhereInput[] | undefined;
    NOT?: TagsOnTimelinesWhereInput[] | undefined;
    tag?: TagRelationFilter | undefined;
    tagId?: IntFilter | undefined;
    timeline?: TimelineRelationFilter | undefined;
    timelineId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
