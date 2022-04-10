import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVotesOnTimelineInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnTimelineInput";
export declare class VotesOnTimelineUpdateWithoutTimelineInput {
    user?: UserUpdateOneRequiredWithoutVotesOnTimelineInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
