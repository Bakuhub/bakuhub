import { SubscriptionsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyPremiseInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput";
import { SubscriptionsOnPremisesCreateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";
export declare class SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput {
    create?: SubscriptionsOnPremisesCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;
    createMany?: SubscriptionsOnPremisesCreateManyPremiseInputEnvelope | undefined;
    connect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
}
