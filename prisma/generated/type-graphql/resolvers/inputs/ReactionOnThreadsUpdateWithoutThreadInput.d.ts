import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionOnThreadsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnThreadsInput";
export declare class ReactionOnThreadsUpdateWithoutThreadInput {
    user?: UserUpdateOneRequiredWithoutReactionOnThreadsInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
