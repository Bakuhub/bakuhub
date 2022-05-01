import { SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope";
import { SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { SupscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SupscriptionsOnTimelinesScalarWhereInput } from "../inputs/SupscriptionsOnTimelinesScalarWhereInput";
import { SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import { SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import { SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import { SupscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SupscriptionsOnTimelinesWhereUniqueInput";
export declare class SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput {
    create?: SupscriptionsOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    upsert?: SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;
    createMany?: SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    set?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    delete?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    connect?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    update?: SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;
    updateMany?: SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;
    deleteMany?: SupscriptionsOnTimelinesScalarWhereInput[] | undefined;
}
