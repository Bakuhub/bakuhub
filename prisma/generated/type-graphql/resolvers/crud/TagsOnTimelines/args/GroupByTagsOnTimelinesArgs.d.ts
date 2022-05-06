import { TagsOnTimelinesOrderByWithAggregationInput } from "../../../inputs/TagsOnTimelinesOrderByWithAggregationInput";
import { TagsOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/TagsOnTimelinesScalarWhereWithAggregatesInput";
import { TagsOnTimelinesWhereInput } from "../../../inputs/TagsOnTimelinesWhereInput";
export declare class GroupByTagsOnTimelinesArgs {
    where?: TagsOnTimelinesWhereInput | undefined;
    orderBy?: TagsOnTimelinesOrderByWithAggregationInput[] | undefined;
    by: Array<"tagId" | "timelineId" | "assignedAt">;
    having?: TagsOnTimelinesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
