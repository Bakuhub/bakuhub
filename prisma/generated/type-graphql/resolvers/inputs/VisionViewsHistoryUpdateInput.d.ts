import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVisionViewsHistoryInput } from "../inputs/UserUpdateOneRequiredWithoutVisionViewsHistoryInput";
import { VisionUpdateOneRequiredWithoutVisionViewsHistoryInput } from "../inputs/VisionUpdateOneRequiredWithoutVisionViewsHistoryInput";
export declare class VisionViewsHistoryUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutVisionViewsHistoryInput | undefined;
    user?: UserUpdateOneRequiredWithoutVisionViewsHistoryInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
