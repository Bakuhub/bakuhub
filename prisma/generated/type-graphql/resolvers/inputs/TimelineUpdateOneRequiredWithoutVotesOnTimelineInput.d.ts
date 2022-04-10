import { TimelineCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateOrConnectWithoutVotesOnTimelineInput";
import { TimelineCreateWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateWithoutVotesOnTimelineInput";
import { TimelineUpdateWithoutVotesOnTimelineInput } from "../inputs/TimelineUpdateWithoutVotesOnTimelineInput";
import { TimelineUpsertWithoutVotesOnTimelineInput } from "../inputs/TimelineUpsertWithoutVotesOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateOneRequiredWithoutVotesOnTimelineInput {
    create?: TimelineCreateWithoutVotesOnTimelineInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutVotesOnTimelineInput | undefined;
    upsert?: TimelineUpsertWithoutVotesOnTimelineInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
    update?: TimelineUpdateWithoutVotesOnTimelineInput | undefined;
}
