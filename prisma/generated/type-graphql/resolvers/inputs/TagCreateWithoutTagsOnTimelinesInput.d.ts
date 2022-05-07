import { TagsOnPremisesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput";
import { TagsOnVisionsCreateNestedManyWithoutTagInput } from "../inputs/TagsOnVisionsCreateNestedManyWithoutTagInput";
export declare class TagCreateWithoutTagsOnTimelinesInput {
    label: string;
    tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutTagInput | undefined;
    tagsOnVisions?: TagsOnVisionsCreateNestedManyWithoutTagInput | undefined;
}
