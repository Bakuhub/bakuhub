import { EnumMergeRequestStatusFieldUpdateOperationsInput } from "../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VisionUpdateOneRequiredWithoutMergeRequestInput } from "../inputs/VisionUpdateOneRequiredWithoutMergeRequestInput";
export declare class MergeRequestUpdateWithoutThreadsOnMergeRequestInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: EnumMergeRequestStatusFieldUpdateOperationsInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutMergeRequestInput | undefined;
}
