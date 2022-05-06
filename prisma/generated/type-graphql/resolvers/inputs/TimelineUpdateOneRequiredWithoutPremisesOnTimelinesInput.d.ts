import { TimelineCreateOrConnectWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutPremisesOnTimelinesInput";
import { TimelineCreateWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateWithoutPremisesOnTimelinesInput";
import { TimelineUpdateWithoutPremisesOnTimelinesInput } from "../inputs/TimelineUpdateWithoutPremisesOnTimelinesInput";
import { TimelineUpsertWithoutPremisesOnTimelinesInput } from "../inputs/TimelineUpsertWithoutPremisesOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput {
    create?: TimelineCreateWithoutPremisesOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;
    upsert?: TimelineUpsertWithoutPremisesOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
    update?: TimelineUpdateWithoutPremisesOnTimelinesInput | undefined;
}
