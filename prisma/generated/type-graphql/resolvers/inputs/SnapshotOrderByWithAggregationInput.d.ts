import { SnapshotCountOrderByAggregateInput } from "../inputs/SnapshotCountOrderByAggregateInput";
import { SnapshotMaxOrderByAggregateInput } from "../inputs/SnapshotMaxOrderByAggregateInput";
import { SnapshotMinOrderByAggregateInput } from "../inputs/SnapshotMinOrderByAggregateInput";
export declare class SnapshotOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    versionId?: "asc" | "desc" | undefined;
    s3Url?: "asc" | "desc" | undefined;
    sourceUrl?: "asc" | "desc" | undefined;
    caption?: "asc" | "desc" | undefined;
    _count?: SnapshotCountOrderByAggregateInput | undefined;
    _max?: SnapshotMaxOrderByAggregateInput | undefined;
    _min?: SnapshotMinOrderByAggregateInput | undefined;
}
