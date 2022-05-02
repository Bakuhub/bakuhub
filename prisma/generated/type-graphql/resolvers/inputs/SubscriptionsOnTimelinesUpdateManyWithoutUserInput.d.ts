import { SubscriptionsOnTimelinesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyUserInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput";
import { SubscriptionsOnTimelinesScalarWhereInput } from "../inputs/SubscriptionsOnTimelinesScalarWhereInput";
import { SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput";
import { SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
export declare class SubscriptionsOnTimelinesUpdateManyWithoutUserInput {
    create?: SubscriptionsOnTimelinesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: SubscriptionsOnTimelinesCreateManyUserInputEnvelope | undefined;
    set?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    delete?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    connect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    update?: SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;
}
