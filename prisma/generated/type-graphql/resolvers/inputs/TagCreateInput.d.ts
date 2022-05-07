import { TagsOnPremisesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput";
import { TagsOnTimelinesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTagInput";
import { TagsOnVisionsCreateNestedManyWithoutTagInput } from "../inputs/TagsOnVisionsCreateNestedManyWithoutTagInput";
export declare class TagCreateInput {
    label: string;
    tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutTagInput | undefined;
    tagsOnVisions?: TagsOnVisionsCreateNestedManyWithoutTagInput | undefined;
    tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTagInput | undefined;
}
