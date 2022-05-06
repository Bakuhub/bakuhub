import { ThreadsOnVisionOrderByWithAggregationInput } from "../../../inputs/ThreadsOnVisionOrderByWithAggregationInput";
import { ThreadsOnVisionScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnVisionScalarWhereWithAggregatesInput";
import { ThreadsOnVisionWhereInput } from "../../../inputs/ThreadsOnVisionWhereInput";
export declare class GroupByThreadsOnVisionArgs {
    where?: ThreadsOnVisionWhereInput | undefined;
    orderBy?: ThreadsOnVisionOrderByWithAggregationInput[] | undefined;
    by: Array<"threadId" | "visionId" | "assignedAt">;
    having?: ThreadsOnVisionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
