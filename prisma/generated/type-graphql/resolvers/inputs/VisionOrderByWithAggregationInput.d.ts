import { VisionCountOrderByAggregateInput } from "../inputs/VisionCountOrderByAggregateInput";
import { VisionMaxOrderByAggregateInput } from "../inputs/VisionMaxOrderByAggregateInput";
import { VisionMinOrderByAggregateInput } from "../inputs/VisionMinOrderByAggregateInput";
export declare class VisionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    activityDate?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    referenceId?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    thumbnail?: "asc" | "desc" | undefined;
    premiseId?: "asc" | "desc" | undefined;
    draftMode?: "asc" | "desc" | undefined;
    prevVisionId?: "asc" | "desc" | undefined;
    _count?: VisionCountOrderByAggregateInput | undefined;
    _max?: VisionMaxOrderByAggregateInput | undefined;
    _min?: VisionMinOrderByAggregateInput | undefined;
}
