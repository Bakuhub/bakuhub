import { VotesOnTimelineOrderByWithAggregationInput } from "../../../inputs/VotesOnTimelineOrderByWithAggregationInput";
import { VotesOnTimelineScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnTimelineScalarWhereWithAggregatesInput";
import { VotesOnTimelineWhereInput } from "../../../inputs/VotesOnTimelineWhereInput";
export declare class GroupByVotesOnTimelineArgs {
    where?: VotesOnTimelineWhereInput | undefined;
    orderBy?: VotesOnTimelineOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "timelineId" | "vote" | "createdAt" | "updatedAt">;
    having?: VotesOnTimelineScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
