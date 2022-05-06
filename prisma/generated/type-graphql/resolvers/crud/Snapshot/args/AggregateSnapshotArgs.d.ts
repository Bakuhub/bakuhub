import { SnapshotOrderByWithRelationInput } from "../../../inputs/SnapshotOrderByWithRelationInput";
import { SnapshotWhereInput } from "../../../inputs/SnapshotWhereInput";
import { SnapshotWhereUniqueInput } from "../../../inputs/SnapshotWhereUniqueInput";
export declare class AggregateSnapshotArgs {
    where?: SnapshotWhereInput | undefined;
    orderBy?: SnapshotOrderByWithRelationInput[] | undefined;
    cursor?: SnapshotWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
