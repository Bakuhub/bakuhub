import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnTimelinesUpdateManyWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTagInput";
import { TagsOnVisionsUpdateManyWithoutTagInput } from "../inputs/TagsOnVisionsUpdateManyWithoutTagInput";
export declare class TagUpdateWithoutTagsOnPremisesInput {
    label?: StringFieldUpdateOperationsInput | undefined;
    tagsOnVisions?: TagsOnVisionsUpdateManyWithoutTagInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTagInput | undefined;
}
