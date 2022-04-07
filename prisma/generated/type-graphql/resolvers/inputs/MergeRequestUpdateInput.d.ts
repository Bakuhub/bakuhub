import { EnumMergeRequestStatusFieldUpdateOperationsInput } from "../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput";
import { VisionUpdateOneRequiredWithoutMergeRequestInput } from "../inputs/VisionUpdateOneRequiredWithoutMergeRequestInput";
export declare class MergeRequestUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: EnumMergeRequestStatusFieldUpdateOperationsInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutMergeRequestInput | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput | undefined;
}
