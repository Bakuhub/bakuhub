import { TimelineCreateOrConnectWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutReactionOnTimelinesInput";
import { TimelineCreateWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateWithoutReactionOnTimelinesInput";
import { TimelineUpdateWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpdateWithoutReactionOnTimelinesInput";
import { TimelineUpsertWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpsertWithoutReactionOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput {
    create?: TimelineCreateWithoutReactionOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutReactionOnTimelinesInput | undefined;
    upsert?: TimelineUpsertWithoutReactionOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
    update?: TimelineUpdateWithoutReactionOnTimelinesInput | undefined;
}
