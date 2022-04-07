import { Reference } from "../models/Reference";
import { SnapshotCount } from "../resolvers/outputs/SnapshotCount";
export declare class Snapshot {
    id: string;
    createdAt: Date;
    versionId: string;
    s3Url: string;
    sourceUrl: string;
    caption: string;
    references?: Reference[];
    _count?: SnapshotCount | null;
}
