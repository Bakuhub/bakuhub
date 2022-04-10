import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVotesOnVisionInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnVisionInput";
import { VisionUpdateOneRequiredWithoutVotesOnVisionInput } from "../inputs/VisionUpdateOneRequiredWithoutVotesOnVisionInput";
export declare class VotesOnVisionUpdateInput {
    user?: UserUpdateOneRequiredWithoutVotesOnVisionInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutVotesOnVisionInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
