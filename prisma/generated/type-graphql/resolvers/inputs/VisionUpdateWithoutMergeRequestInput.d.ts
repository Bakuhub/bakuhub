import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVisionInput } from "../inputs/PremiseUpdateOneRequiredWithoutVisionInput";
import { ReactionOnVisionsUpdateManyWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateManyWithoutVisionInput";
import { ReferenceUpdateOneWithoutVisionInput } from "../inputs/ReferenceUpdateOneWithoutVisionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnVisionUpdateManyWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput";
import { UserUpdateOneWithoutVisionsInput } from "../inputs/UserUpdateOneWithoutVisionsInput";
import { VisionUpdateManyWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithoutPrevVisionInput";
import { VisionUpdateOneWithoutNextVisionsInput } from "../inputs/VisionUpdateOneWithoutNextVisionsInput";
import { VotesOnVisionUpdateManyWithoutVisionInput } from "../inputs/VotesOnVisionUpdateManyWithoutVisionInput";
export declare class VisionUpdateWithoutMergeRequestInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    reference?: ReferenceUpdateOneWithoutVisionInput | undefined;
    author?: UserUpdateOneWithoutVisionsInput | undefined;
    premise?: PremiseUpdateOneRequiredWithoutVisionInput | undefined;
    thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;
    draftMode?: BoolFieldUpdateOperationsInput | undefined;
    prevVision?: VisionUpdateOneWithoutNextVisionsInput | undefined;
    nextVisions?: VisionUpdateManyWithoutPrevVisionInput | undefined;
    threadsOnVision?: ThreadsOnVisionUpdateManyWithoutVisionInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsUpdateManyWithoutVisionInput | undefined;
    votesOnVision?: VotesOnVisionUpdateManyWithoutVisionInput | undefined;
}
