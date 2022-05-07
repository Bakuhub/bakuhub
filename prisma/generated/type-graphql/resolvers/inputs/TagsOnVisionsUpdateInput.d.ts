import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TagUpdateOneRequiredWithoutTagsOnVisionsInput } from "../inputs/TagUpdateOneRequiredWithoutTagsOnVisionsInput";
import { VisionUpdateOneRequiredWithoutTagsOnVisionsInput } from "../inputs/VisionUpdateOneRequiredWithoutTagsOnVisionsInput";
export declare class TagsOnVisionsUpdateInput {
    tag?: TagUpdateOneRequiredWithoutTagsOnVisionsInput | undefined;
    vision?: VisionUpdateOneRequiredWithoutTagsOnVisionsInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
