import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutReactionOnThreadsInput } from "../inputs/ThreadUpdateOneRequiredWithoutReactionOnThreadsInput";
export declare class ReactionOnThreadsUpdateWithoutUserInput {
    thread?: ThreadUpdateOneRequiredWithoutReactionOnThreadsInput | undefined;
    reaction?: EnumReactionFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
