import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVisionViewsHistoryInput } from "../inputs/UserUpdateOneRequiredWithoutVisionViewsHistoryInput";
export declare class VisionViewsHistoryUpdateWithoutVisionInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutVisionViewsHistoryInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
