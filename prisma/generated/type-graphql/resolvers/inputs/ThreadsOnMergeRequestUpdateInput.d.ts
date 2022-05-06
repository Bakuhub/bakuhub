import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput";
import { ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput";
export declare class ThreadsOnMergeRequestUpdateInput {
    thread?: ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput | undefined;
    mergeRequest?: MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
