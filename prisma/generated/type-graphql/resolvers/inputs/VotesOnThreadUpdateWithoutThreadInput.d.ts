import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVotesOnThreadInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnThreadInput";
export declare class VotesOnThreadUpdateWithoutThreadInput {
    user?: UserUpdateOneRequiredWithoutVotesOnThreadInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
