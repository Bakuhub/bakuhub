import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { VisionUpdateOneRequiredWithoutReactionOnVisionsInput } from "../inputs/VisionUpdateOneRequiredWithoutReactionOnVisionsInput";
export declare class ReactionOnVisionsUpdateWithoutUserInput {
    vision?: VisionUpdateOneRequiredWithoutReactionOnVisionsInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
