import { SnapshotUpdateManyWithoutReferencesInput } from "../inputs/SnapshotUpdateManyWithoutReferencesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VisionUpdateManyWithoutReferenceInput } from "../inputs/VisionUpdateManyWithoutReferenceInput";
export declare class ReferenceUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    snapshots?: SnapshotUpdateManyWithoutReferencesInput | undefined;
    vision?: VisionUpdateManyWithoutReferenceInput | undefined;
}
