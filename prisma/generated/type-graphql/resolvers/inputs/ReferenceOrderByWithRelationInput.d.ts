import { SnapshotOrderByRelationAggregateInput } from "../inputs/SnapshotOrderByRelationAggregateInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
export declare class ReferenceOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    snapshots?: SnapshotOrderByRelationAggregateInput | undefined;
    vision?: VisionOrderByRelationAggregateInput | undefined;
}
