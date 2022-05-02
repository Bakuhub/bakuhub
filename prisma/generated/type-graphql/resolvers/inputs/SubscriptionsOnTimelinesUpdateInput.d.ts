import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput";
import { UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput";
export declare class SubscriptionsOnTimelinesUpdateInput {
    user?: UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput | undefined;
    timeline?: TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput | undefined;
    hasUnreadNotifications?: BoolFieldUpdateOperationsInput | undefined;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
