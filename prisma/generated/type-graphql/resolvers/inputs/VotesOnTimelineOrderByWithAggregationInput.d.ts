import { VotesOnTimelineAvgOrderByAggregateInput } from "../inputs/VotesOnTimelineAvgOrderByAggregateInput";
import { VotesOnTimelineCountOrderByAggregateInput } from "../inputs/VotesOnTimelineCountOrderByAggregateInput";
import { VotesOnTimelineMaxOrderByAggregateInput } from "../inputs/VotesOnTimelineMaxOrderByAggregateInput";
import { VotesOnTimelineMinOrderByAggregateInput } from "../inputs/VotesOnTimelineMinOrderByAggregateInput";
import { VotesOnTimelineSumOrderByAggregateInput } from "../inputs/VotesOnTimelineSumOrderByAggregateInput";
export declare class VotesOnTimelineOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    timelineId?: "asc" | "desc" | undefined;
    vote?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: VotesOnTimelineCountOrderByAggregateInput | undefined;
    _avg?: VotesOnTimelineAvgOrderByAggregateInput | undefined;
    _max?: VotesOnTimelineMaxOrderByAggregateInput | undefined;
    _min?: VotesOnTimelineMinOrderByAggregateInput | undefined;
    _sum?: VotesOnTimelineSumOrderByAggregateInput | undefined;
}
