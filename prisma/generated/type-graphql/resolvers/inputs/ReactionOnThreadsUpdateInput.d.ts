import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutReactionOnThreadsInput } from "../inputs/ThreadUpdateOneRequiredWithoutReactionOnThreadsInput";
import { UserUpdateOneRequiredWithoutReactionOnThreadsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnThreadsInput";
export declare class ReactionOnThreadsUpdateInput {
    user?: UserUpdateOneRequiredWithoutReactionOnThreadsInput | undefined;
    thread?: ThreadUpdateOneRequiredWithoutReactionOnThreadsInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
