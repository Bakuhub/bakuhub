import { TagCreateNestedOneWithoutTagsOnTimelinesInput } from "../inputs/TagCreateNestedOneWithoutTagsOnTimelinesInput";
import { TimelineCreateNestedOneWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutTagsOnTimelinesInput";
export declare class TagsOnTimelinesCreateInput {
    tag: TagCreateNestedOneWithoutTagsOnTimelinesInput;
    timeline: TimelineCreateNestedOneWithoutTagsOnTimelinesInput;
    assignedAt?: Date | undefined;
}
