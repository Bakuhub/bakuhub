import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutVotesOnTimelineInput } from "../inputs/TimelineUpdateOneRequiredWithoutVotesOnTimelineInput";
export declare class VotesOnTimelineUpdateWithoutUserInput {
    timeline?: TimelineUpdateOneRequiredWithoutVotesOnTimelineInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
