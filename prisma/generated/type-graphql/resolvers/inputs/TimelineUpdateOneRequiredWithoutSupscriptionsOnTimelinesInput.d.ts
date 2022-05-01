import { TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput";
import { TimelineCreateWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSupscriptionsOnTimelinesInput";
import { TimelineUpdateWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateWithoutSupscriptionsOnTimelinesInput";
import { TimelineUpsertWithoutSupscriptionsOnTimelinesInput } from "../inputs/TimelineUpsertWithoutSupscriptionsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput {
    create?: TimelineCreateWithoutSupscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput | undefined;
    upsert?: TimelineUpsertWithoutSupscriptionsOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
    update?: TimelineUpdateWithoutSupscriptionsOnTimelinesInput | undefined;
}
