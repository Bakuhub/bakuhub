import { TagsOnTimelinesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTagInput";
import { TagsOnVisionsCreateNestedManyWithoutTagInput } from "../inputs/TagsOnVisionsCreateNestedManyWithoutTagInput";
export declare class TagCreateWithoutTagsOnPremisesInput {
    label: string;
    tagsOnVisions?: TagsOnVisionsCreateNestedManyWithoutTagInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTagInput | undefined;
}
