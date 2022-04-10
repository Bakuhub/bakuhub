import { VotesOnThreadOrderByWithAggregationInput } from "../../../inputs/VotesOnThreadOrderByWithAggregationInput";
import { VotesOnThreadScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnThreadScalarWhereWithAggregatesInput";
import { VotesOnThreadWhereInput } from "../../../inputs/VotesOnThreadWhereInput";
export declare class GroupByVotesOnThreadArgs {
    where?: VotesOnThreadWhereInput | undefined;
    orderBy?: VotesOnThreadOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "threadId" | "vote" | "createdAt">;
    having?: VotesOnThreadScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
