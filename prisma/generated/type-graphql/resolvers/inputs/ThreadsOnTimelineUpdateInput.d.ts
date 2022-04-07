import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput } from "../inputs/ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput";
import { TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput } from "../inputs/TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput";
export declare class ThreadsOnTimelineUpdateInput {
    thread?: ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput | undefined;
    timeline?: TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
