import { SnapshotCountAggregate } from "../outputs/SnapshotCountAggregate";
import { SnapshotMaxAggregate } from "../outputs/SnapshotMaxAggregate";
import { SnapshotMinAggregate } from "../outputs/SnapshotMinAggregate";
export declare class AggregateSnapshot {
    _count: SnapshotCountAggregate | null;
    _min: SnapshotMinAggregate | null;
    _max: SnapshotMaxAggregate | null;
}
