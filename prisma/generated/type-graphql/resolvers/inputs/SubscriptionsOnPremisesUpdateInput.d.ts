import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput";
import { UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput";
export declare class SubscriptionsOnPremisesUpdateInput {
    user?: UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput | undefined;
    premise?: PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
