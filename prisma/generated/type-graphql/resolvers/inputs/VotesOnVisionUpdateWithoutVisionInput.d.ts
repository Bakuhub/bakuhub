import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVotesOnVisionInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnVisionInput";
export declare class VotesOnVisionUpdateWithoutVisionInput {
    user?: UserUpdateOneRequiredWithoutVotesOnVisionInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
