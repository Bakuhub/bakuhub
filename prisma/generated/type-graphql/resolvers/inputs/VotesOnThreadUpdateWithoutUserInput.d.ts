import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutVotesOnThreadInput } from "../inputs/ThreadUpdateOneRequiredWithoutVotesOnThreadInput";
export declare class VotesOnThreadUpdateWithoutUserInput {
    thread?: ThreadUpdateOneRequiredWithoutVotesOnThreadInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
