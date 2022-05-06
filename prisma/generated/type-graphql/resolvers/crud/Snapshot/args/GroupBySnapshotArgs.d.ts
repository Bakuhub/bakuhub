import { SnapshotOrderByWithAggregationInput } from "../../../inputs/SnapshotOrderByWithAggregationInput";
import { SnapshotScalarWhereWithAggregatesInput } from "../../../inputs/SnapshotScalarWhereWithAggregatesInput";
import { SnapshotWhereInput } from "../../../inputs/SnapshotWhereInput";
export declare class GroupBySnapshotArgs {
    where?: SnapshotWhereInput | undefined;
    orderBy?: SnapshotOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "versionId" | "s3Url" | "sourceUrl" | "caption">;
    having?: SnapshotScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
