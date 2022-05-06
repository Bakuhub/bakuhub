import { TimelineCreateOrConnectWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutReactionOnTimelinesInput";
import { TimelineCreateWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateWithoutReactionOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedOneWithoutReactionOnTimelinesInput {
    create?: TimelineCreateWithoutReactionOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutReactionOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
}
