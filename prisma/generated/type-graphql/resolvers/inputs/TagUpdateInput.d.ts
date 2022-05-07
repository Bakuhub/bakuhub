import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnPremisesUpdateManyWithoutTagInput } from "../inputs/TagsOnPremisesUpdateManyWithoutTagInput";
import { TagsOnTimelinesUpdateManyWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTagInput";
import { TagsOnVisionsUpdateManyWithoutTagInput } from "../inputs/TagsOnVisionsUpdateManyWithoutTagInput";
export declare class TagUpdateInput {
    label?: StringFieldUpdateOperationsInput | undefined;
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutTagInput | undefined;
    tagsOnVisions?: TagsOnVisionsUpdateManyWithoutTagInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTagInput | undefined;
}
