import { SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SubscriptionsOnTimelinesScalarWhereInput } from "../inputs/SubscriptionsOnTimelinesScalarWhereInput";
import { SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import { SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import { SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
export declare class SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput {
    create?: SubscriptionsOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    upsert?: SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;
    createMany?: SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    set?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    delete?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    connect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    update?: SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;
    updateMany?: SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;
    deleteMany?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;
}
