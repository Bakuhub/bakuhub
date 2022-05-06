import { SubscriptionsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyPremiseInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput";
import { SubscriptionsOnPremisesCreateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput";
import { SubscriptionsOnPremisesScalarWhereInput } from "../inputs/SubscriptionsOnPremisesScalarWhereInput";
import { SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput";
import { SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput";
import { SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";
export declare class SubscriptionsOnPremisesUpdateManyWithoutPremiseInput {
    create?: SubscriptionsOnPremisesCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;
    upsert?: SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;
    createMany?: SubscriptionsOnPremisesCreateManyPremiseInputEnvelope | undefined;
    set?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    disconnect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    delete?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    connect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
    update?: SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;
    updateMany?: SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput[] | undefined;
    deleteMany?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;
}
