import { TagCreateNestedOneWithoutTagsOnVisionsInput } from "../inputs/TagCreateNestedOneWithoutTagsOnVisionsInput";
import { VisionCreateNestedOneWithoutTagsOnVisionsInput } from "../inputs/VisionCreateNestedOneWithoutTagsOnVisionsInput";
export declare class TagsOnVisionsCreateInput {
    tag: TagCreateNestedOneWithoutTagsOnVisionsInput;
    vision: VisionCreateNestedOneWithoutTagsOnVisionsInput;
    assignedAt?: Date | undefined;
}
