import { MergeRequestOrderByWithAggregationInput } from "../../../inputs/MergeRequestOrderByWithAggregationInput";
import { MergeRequestScalarWhereWithAggregatesInput } from "../../../inputs/MergeRequestScalarWhereWithAggregatesInput";
import { MergeRequestWhereInput } from "../../../inputs/MergeRequestWhereInput";
export declare class GroupByMergeRequestArgs {
    where?: MergeRequestWhereInput | undefined;
    orderBy?: MergeRequestOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "status" | "visionId">;
    having?: MergeRequestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
