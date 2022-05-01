import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput";
export declare class SupscriptionsOnTimelinesUpdateWithoutUserInput {
    timeline?: TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
