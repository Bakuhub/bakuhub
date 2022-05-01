import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput";
export declare class SupscriptionsOnTimelinesUpdateWithoutTimelineInput {
    user?: UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
