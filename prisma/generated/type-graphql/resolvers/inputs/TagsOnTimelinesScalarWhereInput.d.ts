import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TagsOnTimelinesScalarWhereInput {
    AND?: TagsOnTimelinesScalarWhereInput[] | undefined;
    OR?: TagsOnTimelinesScalarWhereInput[] | undefined;
    NOT?: TagsOnTimelinesScalarWhereInput[] | undefined;
    tagId?: IntFilter | undefined;
    timelineId?: StringFilter | undefined;
    assignedAt?: DateTimeFilter | undefined;
}
