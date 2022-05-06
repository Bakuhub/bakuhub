import { ReferenceCreateNestedManyWithoutSnapshotsInput } from "../inputs/ReferenceCreateNestedManyWithoutSnapshotsInput";
export declare class SnapshotCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    versionId: string;
    s3Url: string;
    sourceUrl: string;
    caption: string;
    references?: ReferenceCreateNestedManyWithoutSnapshotsInput | undefined;
}
