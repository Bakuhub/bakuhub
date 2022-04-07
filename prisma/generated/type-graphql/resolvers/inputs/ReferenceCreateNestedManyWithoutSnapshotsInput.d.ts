import { ReferenceCreateOrConnectWithoutSnapshotsInput } from "../inputs/ReferenceCreateOrConnectWithoutSnapshotsInput";
import { ReferenceCreateWithoutSnapshotsInput } from "../inputs/ReferenceCreateWithoutSnapshotsInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";
export declare class ReferenceCreateNestedManyWithoutSnapshotsInput {
    create?: ReferenceCreateWithoutSnapshotsInput[] | undefined;
    connectOrCreate?: ReferenceCreateOrConnectWithoutSnapshotsInput[] | undefined;
    connect?: ReferenceWhereUniqueInput[] | undefined;
}
