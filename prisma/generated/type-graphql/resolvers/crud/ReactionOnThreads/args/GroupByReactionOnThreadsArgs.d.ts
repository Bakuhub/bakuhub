import { ReactionOnThreadsOrderByWithAggregationInput } from "../../../inputs/ReactionOnThreadsOrderByWithAggregationInput";
import { ReactionOnThreadsScalarWhereWithAggregatesInput } from "../../../inputs/ReactionOnThreadsScalarWhereWithAggregatesInput";
import { ReactionOnThreadsWhereInput } from "../../../inputs/ReactionOnThreadsWhereInput";
export declare class GroupByReactionOnThreadsArgs {
    where?: ReactionOnThreadsWhereInput | undefined;
    orderBy?: ReactionOnThreadsOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "threadId" | "reaction" | "createdAt">;
    having?: ReactionOnThreadsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
