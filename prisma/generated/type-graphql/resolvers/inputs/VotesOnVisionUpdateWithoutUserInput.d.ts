import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { VisionUpdateOneRequiredWithoutVotesOnVisionInput } from "../inputs/VisionUpdateOneRequiredWithoutVotesOnVisionInput";
export declare class VotesOnVisionUpdateWithoutUserInput {
    vision?: VisionUpdateOneRequiredWithoutVotesOnVisionInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
