import { SnapshotCreateOrConnectWithoutReferencesInput } from "../inputs/SnapshotCreateOrConnectWithoutReferencesInput";
import { SnapshotCreateWithoutReferencesInput } from "../inputs/SnapshotCreateWithoutReferencesInput";
import { SnapshotScalarWhereInput } from "../inputs/SnapshotScalarWhereInput";
import { SnapshotUpdateManyWithWhereWithoutReferencesInput } from "../inputs/SnapshotUpdateManyWithWhereWithoutReferencesInput";
import { SnapshotUpdateWithWhereUniqueWithoutReferencesInput } from "../inputs/SnapshotUpdateWithWhereUniqueWithoutReferencesInput";
import { SnapshotUpsertWithWhereUniqueWithoutReferencesInput } from "../inputs/SnapshotUpsertWithWhereUniqueWithoutReferencesInput";
import { SnapshotWhereUniqueInput } from "../inputs/SnapshotWhereUniqueInput";
export declare class SnapshotUpdateManyWithoutReferencesInput {
    create?: SnapshotCreateWithoutReferencesInput[] | undefined;
    connectOrCreate?: SnapshotCreateOrConnectWithoutReferencesInput[] | undefined;
    upsert?: SnapshotUpsertWithWhereUniqueWithoutReferencesInput[] | undefined;
    set?: SnapshotWhereUniqueInput[] | undefined;
    disconnect?: SnapshotWhereUniqueInput[] | undefined;
    delete?: SnapshotWhereUniqueInput[] | undefined;
    connect?: SnapshotWhereUniqueInput[] | undefined;
    update?: SnapshotUpdateWithWhereUniqueWithoutReferencesInput[] | undefined;
    updateMany?: SnapshotUpdateManyWithWhereWithoutReferencesInput[] | undefined;
    deleteMany?: SnapshotScalarWhereInput[] | undefined;
}
