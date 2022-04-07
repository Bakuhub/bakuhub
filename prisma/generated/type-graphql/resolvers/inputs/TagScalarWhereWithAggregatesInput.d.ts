import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TagScalarWhereWithAggregatesInput {
    AND?: TagScalarWhereWithAggregatesInput[] | undefined;
    OR?: TagScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TagScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    label?: StringWithAggregatesFilter | undefined;
}
