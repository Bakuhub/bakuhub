import { SnapshotCreateOrConnectWithoutReferencesInput } from "../inputs/SnapshotCreateOrConnectWithoutReferencesInput";
import { SnapshotCreateWithoutReferencesInput } from "../inputs/SnapshotCreateWithoutReferencesInput";
import { SnapshotWhereUniqueInput } from "../inputs/SnapshotWhereUniqueInput";
export declare class SnapshotCreateNestedManyWithoutReferencesInput {
    create?: SnapshotCreateWithoutReferencesInput[] | undefined;
    connectOrCreate?: SnapshotCreateOrConnectWithoutReferencesInput[] | undefined;
    connect?: SnapshotWhereUniqueInput[] | undefined;
}
