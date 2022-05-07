import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TagsOnVisionsScalarWhereWithAggregatesInput {
    AND?: TagsOnVisionsScalarWhereWithAggregatesInput[] | undefined;
    OR?: TagsOnVisionsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TagsOnVisionsScalarWhereWithAggregatesInput[] | undefined;
    tagId?: IntWithAggregatesFilter | undefined;
    visionId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
