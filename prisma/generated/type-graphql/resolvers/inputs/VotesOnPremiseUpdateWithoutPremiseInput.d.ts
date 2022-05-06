import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVotesOnPremiseInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnPremiseInput";
export declare class VotesOnPremiseUpdateWithoutPremiseInput {
    user?: UserUpdateOneRequiredWithoutVotesOnPremiseInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
