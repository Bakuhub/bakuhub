import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TagsOnPremisesScalarWhereWithAggregatesInput {
    AND?: TagsOnPremisesScalarWhereWithAggregatesInput[] | undefined;
    OR?: TagsOnPremisesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TagsOnPremisesScalarWhereWithAggregatesInput[] | undefined;
    tagId?: IntWithAggregatesFilter | undefined;
    premiseId?: StringWithAggregatesFilter | undefined;
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
