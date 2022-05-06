import { ThreadsOnMergeRequestOrderByWithAggregationInput } from "../../../inputs/ThreadsOnMergeRequestOrderByWithAggregationInput";
import { ThreadsOnMergeRequestScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnMergeRequestScalarWhereWithAggregatesInput";
import { ThreadsOnMergeRequestWhereInput } from "../../../inputs/ThreadsOnMergeRequestWhereInput";
export declare class GroupByThreadsOnMergeRequestArgs {
    where?: ThreadsOnMergeRequestWhereInput | undefined;
    orderBy?: ThreadsOnMergeRequestOrderByWithAggregationInput[] | undefined;
    by: Array<"threadId" | "mergeRequestId" | "assignedAt">;
    having?: ThreadsOnMergeRequestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
