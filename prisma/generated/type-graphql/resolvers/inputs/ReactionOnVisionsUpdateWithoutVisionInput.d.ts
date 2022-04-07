import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionOnVisionsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnVisionsInput";
export declare class ReactionOnVisionsUpdateWithoutVisionInput {
    user?: UserUpdateOneRequiredWithoutReactionOnVisionsInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
