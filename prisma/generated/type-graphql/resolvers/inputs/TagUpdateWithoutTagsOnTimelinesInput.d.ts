import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnPremisesUpdateManyWithoutTagInput } from "../inputs/TagsOnPremisesUpdateManyWithoutTagInput";
import { TagsOnVisionsUpdateManyWithoutTagInput } from "../inputs/TagsOnVisionsUpdateManyWithoutTagInput";
export declare class TagUpdateWithoutTagsOnTimelinesInput {
    label?: StringFieldUpdateOperationsInput | undefined;
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutTagInput | undefined;
    tagsOnVisions?: TagsOnVisionsUpdateManyWithoutTagInput | undefined;
}
