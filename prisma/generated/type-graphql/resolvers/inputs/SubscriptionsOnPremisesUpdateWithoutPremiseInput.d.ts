import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput";
export declare class SubscriptionsOnPremisesUpdateWithoutPremiseInput {
    user?: UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
