import { TimelineCreateOrConnectWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateOrConnectWithoutThreadsOnTimelineInput";
import { TimelineCreateWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateWithoutThreadsOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedOneWithoutThreadsOnTimelineInput {
    create?: TimelineCreateWithoutThreadsOnTimelineInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutThreadsOnTimelineInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
}
