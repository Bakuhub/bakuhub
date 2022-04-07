import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutTagsOnPremisesInput } from "../inputs/PremiseUpdateOneRequiredWithoutTagsOnPremisesInput";
import { TagUpdateOneRequiredWithoutTagsOnPremisesInput } from "../inputs/TagUpdateOneRequiredWithoutTagsOnPremisesInput";
export declare class TagsOnPremisesUpdateInput {
    tag?: TagUpdateOneRequiredWithoutTagsOnPremisesInput | undefined;
    premise?: PremiseUpdateOneRequiredWithoutTagsOnPremisesInput | undefined;
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
