import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput";
export declare class SubscriptionsOnTimelinesUpdateWithoutTimelineInput {
    user?: UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput | undefined;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
