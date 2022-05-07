import { TagsOnVisionsOrderByWithAggregationInput } from "../../../inputs/TagsOnVisionsOrderByWithAggregationInput";
import { TagsOnVisionsScalarWhereWithAggregatesInput } from "../../../inputs/TagsOnVisionsScalarWhereWithAggregatesInput";
import { TagsOnVisionsWhereInput } from "../../../inputs/TagsOnVisionsWhereInput";
export declare class GroupByTagsOnVisionsArgs {
    where?: TagsOnVisionsWhereInput | undefined;
    orderBy?: TagsOnVisionsOrderByWithAggregationInput[] | undefined;
    by: Array<"tagId" | "visionId" | "assignedAt">;
    having?: TagsOnVisionsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
