import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVotesOnPremiseInput } from "../inputs/PremiseUpdateOneRequiredWithoutVotesOnPremiseInput";
export declare class VotesOnPremiseUpdateWithoutUserInput {
    premise?: PremiseUpdateOneRequiredWithoutVotesOnPremiseInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
