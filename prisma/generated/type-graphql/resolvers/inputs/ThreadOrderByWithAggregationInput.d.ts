import { ThreadCountOrderByAggregateInput } from "../inputs/ThreadCountOrderByAggregateInput";
import { ThreadMaxOrderByAggregateInput } from "../inputs/ThreadMaxOrderByAggregateInput";
import { ThreadMinOrderByAggregateInput } from "../inputs/ThreadMinOrderByAggregateInput";
export declare class ThreadOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    activityDate?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    reference?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    parentThreadId?: "asc" | "desc" | undefined;
    _count?: ThreadCountOrderByAggregateInput | undefined;
    _max?: ThreadMaxOrderByAggregateInput | undefined;
    _min?: ThreadMinOrderByAggregateInput | undefined;
}
