import { VotesOnThreadAvgOrderByAggregateInput } from "../inputs/VotesOnThreadAvgOrderByAggregateInput";
import { VotesOnThreadCountOrderByAggregateInput } from "../inputs/VotesOnThreadCountOrderByAggregateInput";
import { VotesOnThreadMaxOrderByAggregateInput } from "../inputs/VotesOnThreadMaxOrderByAggregateInput";
import { VotesOnThreadMinOrderByAggregateInput } from "../inputs/VotesOnThreadMinOrderByAggregateInput";
import { VotesOnThreadSumOrderByAggregateInput } from "../inputs/VotesOnThreadSumOrderByAggregateInput";
export declare class VotesOnThreadOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    threadId?: "asc" | "desc" | undefined;
    vote?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: VotesOnThreadCountOrderByAggregateInput | undefined;
    _avg?: VotesOnThreadAvgOrderByAggregateInput | undefined;
    _max?: VotesOnThreadMaxOrderByAggregateInput | undefined;
    _min?: VotesOnThreadMinOrderByAggregateInput | undefined;
    _sum?: VotesOnThreadSumOrderByAggregateInput | undefined;
}
