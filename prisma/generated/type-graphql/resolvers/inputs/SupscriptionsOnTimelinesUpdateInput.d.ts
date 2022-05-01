import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput";
import { UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput";
export declare class SupscriptionsOnTimelinesUpdateInput {
    user?: UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput | undefined;
    timeline?: TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput | undefined;
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
