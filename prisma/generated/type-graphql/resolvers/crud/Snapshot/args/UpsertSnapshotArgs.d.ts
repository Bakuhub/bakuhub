import { SnapshotCreateInput } from "../../../inputs/SnapshotCreateInput";
import { SnapshotUpdateInput } from "../../../inputs/SnapshotUpdateInput";
import { SnapshotWhereUniqueInput } from "../../../inputs/SnapshotWhereUniqueInput";
export declare class UpsertSnapshotArgs {
    where: SnapshotWhereUniqueInput;
    create: SnapshotCreateInput;
    update: SnapshotUpdateInput;
}
