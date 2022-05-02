import { TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { TimelineCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput {
    create?: TimelineCreateWithoutSubscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
}
