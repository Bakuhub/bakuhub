import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MergeRequestUpdateOneWithoutVisionInput } from "../inputs/MergeRequestUpdateOneWithoutVisionInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReactionOnVisionsUpdateManyWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateManyWithoutVisionInput";
import { ReferenceUpdateOneWithoutVisionInput } from "../inputs/ReferenceUpdateOneWithoutVisionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnVisionUpdateManyWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput";
import { UserUpdateOneWithoutVisionsInput } from "../inputs/UserUpdateOneWithoutVisionsInput";
import { VisionUpdateManyWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithoutPrevVisionInput";
import { VisionUpdateOneWithoutNextVisionsInput } from "../inputs/VisionUpdateOneWithoutNextVisionsInput";
export declare class VisionUpdateWithoutPremiseInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    reference?: ReferenceUpdateOneWithoutVisionInput | undefined;
    author?: UserUpdateOneWithoutVisionsInput | undefined;
    thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;
    draftMode?: BoolFieldUpdateOperationsInput | undefined;
    prevVision?: VisionUpdateOneWithoutNextVisionsInput | undefined;
    nextVisions?: VisionUpdateManyWithoutPrevVisionInput | undefined;
    threadsOnVision?: ThreadsOnVisionUpdateManyWithoutVisionInput | undefined;
    mergeRequest?: MergeRequestUpdateOneWithoutVisionInput | undefined;
    ReactionOnVisions?: ReactionOnVisionsUpdateManyWithoutVisionInput | undefined;
}
