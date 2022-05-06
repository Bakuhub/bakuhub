import { ReferenceOrderByWithRelationInput } from "../../../inputs/ReferenceOrderByWithRelationInput";
import { ReferenceWhereInput } from "../../../inputs/ReferenceWhereInput";
import { ReferenceWhereUniqueInput } from "../../../inputs/ReferenceWhereUniqueInput";
export declare class SnapshotReferencesArgs {
    where?: ReferenceWhereInput | undefined;
    orderBy?: ReferenceOrderByWithRelationInput[] | undefined;
    cursor?: ReferenceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: "id"[] | undefined;
}
