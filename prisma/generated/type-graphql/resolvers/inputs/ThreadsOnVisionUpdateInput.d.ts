import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutThreadsOnVisionInput } from "../inputs/ThreadUpdateOneRequiredWithoutThreadsOnVisionInput";
import { VisionUpdateOneRequiredWithoutThreadsOnVisionInput } from "../inputs/VisionUpdateOneRequiredWithoutThreadsOnVisionInput";
export declare class ThreadsOnVisionUpdateInput {
    thread?: ThreadUpdateOneRequiredWithoutThreadsOnVisionInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutThreadsOnVisionInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
