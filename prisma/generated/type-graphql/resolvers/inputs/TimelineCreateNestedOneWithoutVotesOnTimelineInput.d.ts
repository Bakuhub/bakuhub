import { TimelineCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateOrConnectWithoutVotesOnTimelineInput";
import { TimelineCreateWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateWithoutVotesOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedOneWithoutVotesOnTimelineInput {
    create?: TimelineCreateWithoutVotesOnTimelineInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutVotesOnTimelineInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
}
