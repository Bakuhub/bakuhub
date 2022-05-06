import { ThreadsOnPremiseOrderByWithAggregationInput } from "../../../inputs/ThreadsOnPremiseOrderByWithAggregationInput";
import { ThreadsOnPremiseScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnPremiseScalarWhereWithAggregatesInput";
import { ThreadsOnPremiseWhereInput } from "../../../inputs/ThreadsOnPremiseWhereInput";
export declare class GroupByThreadsOnPremiseArgs {
    where?: ThreadsOnPremiseWhereInput | undefined;
    orderBy?: ThreadsOnPremiseOrderByWithAggregationInput[] | undefined;
    by: Array<"threadId" | "premiseId" | "assignedAt">;
    having?: ThreadsOnPremiseScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
