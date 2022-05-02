import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadUpdateManyWithoutParentThreadInput } from "../inputs/ThreadUpdateManyWithoutParentThreadInput";
import { ThreadUpdateOneWithoutChildThreadsInput } from "../inputs/ThreadUpdateOneWithoutChildThreadsInput";
import { ThreadsOnMergeRequestUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestUpdateOneWithoutThreadInput";
import { ThreadsOnPremiseUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnPremiseUpdateOneWithoutThreadInput";
import { ThreadsOnTimelineUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpdateOneWithoutThreadInput";
import { ThreadsOnVisionUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnVisionUpdateOneWithoutThreadInput";
import { UserUpdateOneWithoutThreadsInput } from "../inputs/UserUpdateOneWithoutThreadsInput";
import { VotesOnThreadUpdateManyWithoutThreadInput } from "../inputs/VotesOnThreadUpdateManyWithoutThreadInput";
export declare class ThreadUpdateWithoutReactionOnThreadsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    reference?: NullableStringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneWithoutThreadsInput | undefined;
    parentThread?: ThreadUpdateOneWithoutChildThreadsInput | undefined;
    childThreads?: ThreadUpdateManyWithoutParentThreadInput | undefined;
    threadsOnPremise?: ThreadsOnPremiseUpdateOneWithoutThreadInput | undefined;
    threadsOnTimeline?: ThreadsOnTimelineUpdateOneWithoutThreadInput | undefined;
    threadsOnVision?: ThreadsOnVisionUpdateOneWithoutThreadInput | undefined;
    threadsOnMergeRequest?: ThreadsOnMergeRequestUpdateOneWithoutThreadInput | undefined;
    votesOnThread?: VotesOnThreadUpdateManyWithoutThreadInput | undefined;
}