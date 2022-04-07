import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TagsOnTimelinesScalarWhereWithAggregatesInput {
    AND?: TagsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    OR?: TagsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TagsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;
    tagId?: IntWithAggregatesFilter | undefined;
    timelineId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
