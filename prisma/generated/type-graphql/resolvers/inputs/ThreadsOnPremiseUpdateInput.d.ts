import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput } from "../inputs/PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput";
import { ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput } from "../inputs/ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput";
export declare class ThreadsOnPremiseUpdateInput {
    thread?: ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput | undefined;
    premise?: PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
