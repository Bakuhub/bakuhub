import { TagsOnPremisesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput";
import { TagsOnTimelinesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTagInput";
export declare class TagCreateWithoutTagsOnVisionsInput {
    label: string;
    tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutTagInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTagInput | undefined;
}
