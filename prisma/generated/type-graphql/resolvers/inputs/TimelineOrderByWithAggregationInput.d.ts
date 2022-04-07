import { TimelineCountOrderByAggregateInput } from "../inputs/TimelineCountOrderByAggregateInput";
import { TimelineMaxOrderByAggregateInput } from "../inputs/TimelineMaxOrderByAggregateInput";
import { TimelineMinOrderByAggregateInput } from "../inputs/TimelineMinOrderByAggregateInput";
export declare class TimelineOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    _count?: TimelineCountOrderByAggregateInput | undefined;
    _max?: TimelineMaxOrderByAggregateInput | undefined;
    _min?: TimelineMinOrderByAggregateInput | undefined;
}
