import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionOnTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnTimelinesInput";
export declare class ReactionOnTimelinesUpdateWithoutTimelineInput {
    user?: UserUpdateOneRequiredWithoutReactionOnTimelinesInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
