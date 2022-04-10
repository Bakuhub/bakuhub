import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVotesOnPremiseInput } from "../inputs/PremiseUpdateOneRequiredWithoutVotesOnPremiseInput";
import { UserUpdateOneRequiredWithoutVotesOnPremiseInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnPremiseInput";
export declare class VotesOnPremiseUpdateInput {
    user?: UserUpdateOneRequiredWithoutVotesOnPremiseInput | undefined;
    premise?: PremiseUpdateOneRequiredWithoutVotesOnPremiseInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
