import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput";
import { UserUpdateOneRequiredWithoutReactionOnTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnTimelinesInput";
export declare class ReactionOnTimelinesUpdateInput {
    user?: UserUpdateOneRequiredWithoutReactionOnTimelinesInput | undefined;
    timeline?: TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
