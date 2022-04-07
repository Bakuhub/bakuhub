import { TimelineCreateOrConnectWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutTagsOnTimelinesInput";
import { TimelineCreateWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateWithoutTagsOnTimelinesInput";
import { TimelineUpdateWithoutTagsOnTimelinesInput } from "../inputs/TimelineUpdateWithoutTagsOnTimelinesInput";
import { TimelineUpsertWithoutTagsOnTimelinesInput } from "../inputs/TimelineUpsertWithoutTagsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput {
    create?: TimelineCreateWithoutTagsOnTimelinesInput | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutTagsOnTimelinesInput | undefined;
    upsert?: TimelineUpsertWithoutTagsOnTimelinesInput | undefined;
    connect?: TimelineWhereUniqueInput | undefined;
    update?: TimelineUpdateWithoutTagsOnTimelinesInput | undefined;
}
