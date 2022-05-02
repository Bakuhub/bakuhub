import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MergeRequestUpdateOneWithoutVisionInput } from "../inputs/MergeRequestUpdateOneWithoutVisionInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVisionInput } from "../inputs/PremiseUpdateOneRequiredWithoutVisionInput";
import { ReactionOnVisionsUpdateManyWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateManyWithoutVisionInput";
import { ReferenceUpdateOneWithoutVisionInput } from "../inputs/ReferenceUpdateOneWithoutVisionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnVisionUpdateManyWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput";
import { VisionUpdateManyWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithoutPrevVisionInput";
import { VisionUpdateOneWithoutNextVisionsInput } from "../inputs/VisionUpdateOneWithoutNextVisionsInput";
import { VotesOnVisionUpdateManyWithoutVisionInput } from "../inputs/VotesOnVisionUpdateManyWithoutVisionInput";
export declare class VisionUpdateWithoutAuthorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    reference?: ReferenceUpdateOneWithoutVisionInput | undefined;
    premise?: PremiseUpdateOneRequiredWithoutVisionInput | undefined;
    thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;
    draftMode?: BoolFieldUpdateOperationsInput | undefined;
    prevVision?: VisionUpdateOneWithoutNextVisionsInput | undefined;
    nextVisions?: VisionUpdateManyWithoutPrevVisionInput | undefined;
    threadsOnVision?: ThreadsOnVisionUpdateManyWithoutVisionInput | undefined;
    mergeRequest?: MergeRequestUpdateOneWithoutVisionInput | undefined;
    reactionOnVisions?: ReactionOnVisionsUpdateManyWithoutVisionInput | undefined;
    votesOnVision?: VotesOnVisionUpdateManyWithoutVisionInput | undefined;
}