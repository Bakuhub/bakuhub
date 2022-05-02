import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput";
export declare class SubscriptionsOnPremisesUpdateWithoutUserInput {
    premise?: PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput | undefined;
    hasUnreadNotifications?: BoolFieldUpdateOperationsInput | undefined;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
