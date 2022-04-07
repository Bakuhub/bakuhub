import { TagsOnPremisesOrderByWithAggregationInput } from "../../../inputs/TagsOnPremisesOrderByWithAggregationInput";
import { TagsOnPremisesScalarWhereWithAggregatesInput } from "../../../inputs/TagsOnPremisesScalarWhereWithAggregatesInput";
import { TagsOnPremisesWhereInput } from "../../../inputs/TagsOnPremisesWhereInput";
export declare class GroupByTagsOnPremisesArgs {
    where?: TagsOnPremisesWhereInput | undefined;
    orderBy?: TagsOnPremisesOrderByWithAggregationInput[] | undefined;
    by: Array<"tagId" | "premiseId" | "assignedAt">;
    having?: TagsOnPremisesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
