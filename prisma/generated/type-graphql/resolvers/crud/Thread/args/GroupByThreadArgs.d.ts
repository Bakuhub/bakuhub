import { ThreadOrderByWithAggregationInput } from "../../../inputs/ThreadOrderByWithAggregationInput";
import { ThreadScalarWhereWithAggregatesInput } from "../../../inputs/ThreadScalarWhereWithAggregatesInput";
import { ThreadWhereInput } from "../../../inputs/ThreadWhereInput";
export declare class GroupByThreadArgs {
    where?: ThreadWhereInput | undefined;
    orderBy?: ThreadOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "activityDate" | "description" | "createdAt" | "reference" | "authorId" | "parentThreadId">;
    having?: ThreadScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
