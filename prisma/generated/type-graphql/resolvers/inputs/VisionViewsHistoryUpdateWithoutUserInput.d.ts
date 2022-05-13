import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VisionUpdateOneRequiredWithoutVisionViewsHistoryInput } from "../inputs/VisionUpdateOneRequiredWithoutVisionViewsHistoryInput";
export declare class VisionViewsHistoryUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutVisionViewsHistoryInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
