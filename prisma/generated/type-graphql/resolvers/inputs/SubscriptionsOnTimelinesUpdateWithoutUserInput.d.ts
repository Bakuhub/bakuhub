import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput";
export declare class SubscriptionsOnTimelinesUpdateWithoutUserInput {
    timeline?: TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput | undefined;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
