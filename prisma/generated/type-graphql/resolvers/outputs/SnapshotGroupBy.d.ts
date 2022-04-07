import { SnapshotCountAggregate } from "../outputs/SnapshotCountAggregate";
import { SnapshotMaxAggregate } from "../outputs/SnapshotMaxAggregate";
import { SnapshotMinAggregate } from "../outputs/SnapshotMinAggregate";
export declare class SnapshotGroupBy {
    id: string;
    createdAt: Date;
    versionId: string;
    s3Url: string;
    sourceUrl: string;
    caption: string;
    _count: SnapshotCountAggregate | null;
    _min: SnapshotMinAggregate | null;
    _max: SnapshotMaxAggregate | null;
}
