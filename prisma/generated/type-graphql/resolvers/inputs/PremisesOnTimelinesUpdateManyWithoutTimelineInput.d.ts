import { PremisesOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/PremisesOnTimelinesCreateManyTimelineInputEnvelope";
import { PremisesOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateOrConnectWithoutTimelineInput";
import { PremisesOnTimelinesCreateWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateWithoutTimelineInput";
import { PremisesOnTimelinesScalarWhereInput } from "../inputs/PremisesOnTimelinesScalarWhereInput";
import { PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import { PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import { PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";
export declare class PremisesOnTimelinesUpdateManyWithoutTimelineInput {
    create?: PremisesOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    upsert?: PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;
    createMany?: PremisesOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    set?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    delete?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
    update?: PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;
    updateMany?: PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;
    deleteMany?: PremisesOnTimelinesScalarWhereInput[] | undefined;
}
