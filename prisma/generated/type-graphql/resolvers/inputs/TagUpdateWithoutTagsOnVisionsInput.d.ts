import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnPremisesUpdateManyWithoutTagInput } from "../inputs/TagsOnPremisesUpdateManyWithoutTagInput";
import { TagsOnTimelinesUpdateManyWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTagInput";
export declare class TagUpdateWithoutTagsOnVisionsInput {
    label?: StringFieldUpdateOperationsInput | undefined;
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutTagInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTagInput | undefined;
}
