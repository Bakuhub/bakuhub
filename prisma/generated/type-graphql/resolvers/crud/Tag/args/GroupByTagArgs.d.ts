import { TagOrderByWithAggregationInput } from "../../../inputs/TagOrderByWithAggregationInput";
import { TagScalarWhereWithAggregatesInput } from "../../../inputs/TagScalarWhereWithAggregatesInput";
import { TagWhereInput } from "../../../inputs/TagWhereInput";
export declare class GroupByTagArgs {
    where?: TagWhereInput | undefined;
    orderBy?: TagOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "label">;
    having?: TagScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
