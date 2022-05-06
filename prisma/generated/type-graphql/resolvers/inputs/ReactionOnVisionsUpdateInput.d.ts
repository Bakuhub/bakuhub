import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionOnVisionsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnVisionsInput";
import { VisionUpdateOneRequiredWithoutReactionOnVisionsInput } from "../inputs/VisionUpdateOneRequiredWithoutReactionOnVisionsInput";
export declare class ReactionOnVisionsUpdateInput {
    user?: UserUpdateOneRequiredWithoutReactionOnVisionsInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutReactionOnVisionsInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
