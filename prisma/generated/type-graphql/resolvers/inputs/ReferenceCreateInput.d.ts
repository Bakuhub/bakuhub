import { SnapshotCreateNestedManyWithoutReferencesInput } from "../inputs/SnapshotCreateNestedManyWithoutReferencesInput";
import { VisionCreateNestedManyWithoutReferenceInput } from "../inputs/VisionCreateNestedManyWithoutReferenceInput";
export declare class ReferenceCreateInput {
    id?: string | undefined;
    snapshots?: SnapshotCreateNestedManyWithoutReferencesInput | undefined;
    vision?: VisionCreateNestedManyWithoutReferenceInput | undefined;
}
