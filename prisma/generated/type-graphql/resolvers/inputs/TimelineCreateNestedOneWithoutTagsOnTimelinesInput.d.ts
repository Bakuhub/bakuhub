import { TimelineCreateOrConnectWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutTagsOnTimelinesInput";
import { TimelineCreateWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateWithoutTagsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedOneWithoutTagsOnTimelinesInput {
    create?: TimelineCreateWithoutTagsOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutTagsOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
}
