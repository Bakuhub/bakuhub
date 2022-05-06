import { VotesOnVisionAvgOrderByAggregateInput } from "../inputs/VotesOnVisionAvgOrderByAggregateInput";
import { VotesOnVisionCountOrderByAggregateInput } from "../inputs/VotesOnVisionCountOrderByAggregateInput";
import { VotesOnVisionMaxOrderByAggregateInput } from "../inputs/VotesOnVisionMaxOrderByAggregateInput";
import { VotesOnVisionMinOrderByAggregateInput } from "../inputs/VotesOnVisionMinOrderByAggregateInput";
import { VotesOnVisionSumOrderByAggregateInput } from "../inputs/VotesOnVisionSumOrderByAggregateInput";
export declare class VotesOnVisionOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    visionId?: "asc" | "desc" | undefined;
    vote?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: VotesOnVisionCountOrderByAggregateInput | undefined;
    _avg?: VotesOnVisionAvgOrderByAggregateInput | undefined;
    _max?: VotesOnVisionMaxOrderByAggregateInput | undefined;
    _min?: VotesOnVisionMinOrderByAggregateInput | undefined;
    _sum?: VotesOnVisionSumOrderByAggregateInput | undefined;
}
