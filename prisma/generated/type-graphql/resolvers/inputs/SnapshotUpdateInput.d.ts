import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ReferenceUpdateManyWithoutSnapshotsInput } from "../inputs/ReferenceUpdateManyWithoutSnapshotsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SnapshotUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    versionId?: StringFieldUpdateOperationsInput | undefined;
    s3Url?: StringFieldUpdateOperationsInput | undefined;
    sourceUrl?: StringFieldUpdateOperationsInput | undefined;
    caption?: StringFieldUpdateOperationsInput | undefined;
    references?: ReferenceUpdateManyWithoutSnapshotsInput | undefined;
}
