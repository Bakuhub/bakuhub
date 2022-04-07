import { TimelineCreateOrConnectWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateOrConnectWithoutThreadsOnTimelineInput";
import { TimelineCreateWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateWithoutThreadsOnTimelineInput";
import { TimelineUpdateWithoutThreadsOnTimelineInput } from "../inputs/TimelineUpdateWithoutThreadsOnTimelineInput";
import { TimelineUpsertWithoutThreadsOnTimelineInput } from "../inputs/TimelineUpsertWithoutThreadsOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput {
    create?: TimelineCreateWithoutThreadsOnTimelineInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutThreadsOnTimelineInput | undefined;
    upsert?: TimelineUpsertWithoutThreadsOnTimelineInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
    update?: TimelineUpdateWithoutThreadsOnTimelineInput | undefined;
}
