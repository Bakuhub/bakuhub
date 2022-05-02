import { TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { TimelineCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput";
import { TimelineUpdateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateWithoutSubscriptionsOnTimelinesInput";
import { TimelineUpsertWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpsertWithoutSubscriptionsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput {
    create?: TimelineCreateWithoutSubscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;
    upsert?: TimelineUpsertWithoutSubscriptionsOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
    update?: TimelineUpdateWithoutSubscriptionsOnTimelinesInput | undefined;
}
