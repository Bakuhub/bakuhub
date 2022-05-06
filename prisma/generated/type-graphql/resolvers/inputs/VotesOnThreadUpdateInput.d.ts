import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutVotesOnThreadInput } from "../inputs/ThreadUpdateOneRequiredWithoutVotesOnThreadInput";
import { UserUpdateOneRequiredWithoutVotesOnThreadInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnThreadInput";
export declare class VotesOnThreadUpdateInput {
    user?: UserUpdateOneRequiredWithoutVotesOnThreadInput | undefined;
    thread?: ThreadUpdateOneRequiredWithoutVotesOnThreadInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
