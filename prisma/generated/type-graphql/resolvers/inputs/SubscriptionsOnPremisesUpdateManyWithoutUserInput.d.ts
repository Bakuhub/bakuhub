import { SubscriptionsOnPremisesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyUserInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnPremisesCreateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutUserInput";
import { SubscriptionsOnPremisesScalarWhereInput } from "../inputs/SubscriptionsOnPremisesScalarWhereInput";
import { SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput";
import { SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";
export declare class SubscriptionsOnPremisesUpdateManyWithoutUserInput {
    create?: SubscriptionsOnPremisesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: SubscriptionsOnPremisesCreateManyUserInputEnvelope | undefined;
    set?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    disconnect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    delete?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    connect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    update?: SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;
}
