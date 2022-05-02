import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
export declare class SubscriptionsOnPremisesUpdateManyMutationInput {
    hasUnreadNotifications?: BoolFieldUpdateOperationsInput | undefined;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
