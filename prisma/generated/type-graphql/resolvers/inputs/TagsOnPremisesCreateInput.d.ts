import { PremiseCreateNestedOneWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateNestedOneWithoutTagsOnPremisesInput";
import { TagCreateNestedOneWithoutTagsOnPremisesInput } from "../inputs/TagCreateNestedOneWithoutTagsOnPremisesInput";
export declare class TagsOnPremisesCreateInput {
    tag: TagCreateNestedOneWithoutTagsOnPremisesInput;
    premise: PremiseCreateNestedOneWithoutTagsOnPremisesInput;
    assignedAt?: Date | undefined;
}
