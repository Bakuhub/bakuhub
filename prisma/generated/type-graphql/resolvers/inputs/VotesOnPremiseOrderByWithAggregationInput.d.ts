import { VotesOnPremiseAvgOrderByAggregateInput } from "../inputs/VotesOnPremiseAvgOrderByAggregateInput";
import { VotesOnPremiseCountOrderByAggregateInput } from "../inputs/VotesOnPremiseCountOrderByAggregateInput";
import { VotesOnPremiseMaxOrderByAggregateInput } from "../inputs/VotesOnPremiseMaxOrderByAggregateInput";
import { VotesOnPremiseMinOrderByAggregateInput } from "../inputs/VotesOnPremiseMinOrderByAggregateInput";
import { VotesOnPremiseSumOrderByAggregateInput } from "../inputs/VotesOnPremiseSumOrderByAggregateInput";
export declare class VotesOnPremiseOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    premiseId?: "asc" | "desc" | undefined;
    vote?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: VotesOnPremiseCountOrderByAggregateInput | undefined;
    _avg?: VotesOnPremiseAvgOrderByAggregateInput | undefined;
    _max?: VotesOnPremiseMaxOrderByAggregateInput | undefined;
    _min?: VotesOnPremiseMinOrderByAggregateInput | undefined;
    _sum?: VotesOnPremiseSumOrderByAggregateInput | undefined;
}
