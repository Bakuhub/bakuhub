import { TimelineCreateOrConnectWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutPremisesOnTimelinesInput";
import { TimelineCreateWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateWithoutPremisesOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedOneWithoutPremisesOnTimelinesInput {
    create?: TimelineCreateWithoutPremisesOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
}
