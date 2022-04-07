import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput";
export declare class ReactionOnTimelinesUpdateWithoutUserInput {
    timeline?: TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
