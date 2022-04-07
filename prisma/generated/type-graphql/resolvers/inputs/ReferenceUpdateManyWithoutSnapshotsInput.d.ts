import { ReferenceCreateOrConnectWithoutSnapshotsInput } from "../inputs/ReferenceCreateOrConnectWithoutSnapshotsInput";
import { ReferenceCreateWithoutSnapshotsInput } from "../inputs/ReferenceCreateWithoutSnapshotsInput";
import { ReferenceScalarWhereInput } from "../inputs/ReferenceScalarWhereInput";
import { ReferenceUpdateManyWithWhereWithoutSnapshotsInput } from "../inputs/ReferenceUpdateManyWithWhereWithoutSnapshotsInput";
import { ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput } from "../inputs/ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput";
import { ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput } from "../inputs/ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";
export declare class ReferenceUpdateManyWithoutSnapshotsInput {
    create?: ReferenceCreateWithoutSnapshotsInput[] | undefined;
    connectOrCreate?: ReferenceCreateOrConnectWithoutSnapshotsInput[] | undefined;
    upsert?: ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput[] | undefined;
    set?: ReferenceWhereUniqueInput[] | undefined;
    disconnect?: ReferenceWhereUniqueInput[] | undefined;
    delete?: ReferenceWhereUniqueInput[] | undefined;
    connect?: ReferenceWhereUniqueInput[] | undefined;
    update?: ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput[] | undefined;
    updateMany?: ReferenceUpdateManyWithWhereWithoutSnapshotsInput[] | undefined;
    deleteMany?: ReferenceScalarWhereInput[] | undefined;
}
