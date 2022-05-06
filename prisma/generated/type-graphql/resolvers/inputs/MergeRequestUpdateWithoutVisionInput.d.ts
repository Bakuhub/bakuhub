import { EnumMergeRequestStatusFieldUpdateOperationsInput } from "../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput";
export declare class MergeRequestUpdateWithoutVisionInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: EnumMergeRequestStatusFieldUpdateOperationsInput | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput | undefined;
}
