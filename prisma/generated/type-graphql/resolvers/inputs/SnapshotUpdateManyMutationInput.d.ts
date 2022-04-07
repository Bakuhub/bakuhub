import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SnapshotUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    versionId?: StringFieldUpdateOperationsInput | undefined;
    s3Url?: StringFieldUpdateOperationsInput | undefined;
    sourceUrl?: StringFieldUpdateOperationsInput | undefined;
    caption?: StringFieldUpdateOperationsInput | undefined;
}
