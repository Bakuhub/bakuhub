import { VotesOnPremiseOrderByWithAggregationInput } from "../../../inputs/VotesOnPremiseOrderByWithAggregationInput";
import { VotesOnPremiseScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnPremiseScalarWhereWithAggregatesInput";
import { VotesOnPremiseWhereInput } from "../../../inputs/VotesOnPremiseWhereInput";
export declare class GroupByVotesOnPremiseArgs {
    where?: VotesOnPremiseWhereInput | undefined;
    orderBy?: VotesOnPremiseOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "premiseId" | "vote" | "createdAt" | "updatedAt">;
    having?: VotesOnPremiseScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
