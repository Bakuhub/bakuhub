import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutVotesOnTimelineInput } from "../inputs/TimelineUpdateOneRequiredWithoutVotesOnTimelineInput";
import { UserUpdateOneRequiredWithoutVotesOnTimelineInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnTimelineInput";
export declare class VotesOnTimelineUpdateInput {
    user?: UserUpdateOneRequiredWithoutVotesOnTimelineInput | undefined;
    timeline?: TimelineUpdateOneRequiredWithoutVotesOnTimelineInput | undefined;
    vote?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
