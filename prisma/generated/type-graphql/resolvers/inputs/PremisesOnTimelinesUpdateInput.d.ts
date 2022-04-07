import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput } from "../inputs/PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput";
import { TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput";
export declare class PremisesOnTimelinesUpdateInput {
    timeline?: TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput | undefined;
    premise?: PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
