import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TagUpdateOneRequiredWithoutTagsOnTimelinesInput } from "../inputs/TagUpdateOneRequiredWithoutTagsOnTimelinesInput";
import { TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput";
export declare class TagsOnTimelinesUpdateInput {
    tag?: TagUpdateOneRequiredWithoutTagsOnTimelinesInput | undefined;
    timeline?: TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
