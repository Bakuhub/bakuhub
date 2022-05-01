import { TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput";
import { TimelineCreateWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSupscriptionsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput {
    create?: TimelineCreateWithoutSupscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
}
