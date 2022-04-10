import { VotesOnVisionOrderByWithAggregationInput } from "../../../inputs/VotesOnVisionOrderByWithAggregationInput";
import { VotesOnVisionScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnVisionScalarWhereWithAggregatesInput";
import { VotesOnVisionWhereInput } from "../../../inputs/VotesOnVisionWhereInput";
export declare class GroupByVotesOnVisionArgs {
    where?: VotesOnVisionWhereInput | undefined;
    orderBy?: VotesOnVisionOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "visionId" | "vote" | "createdAt">;
    having?: VotesOnVisionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
