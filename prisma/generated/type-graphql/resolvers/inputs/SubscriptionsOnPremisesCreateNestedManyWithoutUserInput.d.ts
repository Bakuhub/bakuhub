import { SubscriptionsOnPremisesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyUserInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnPremisesCreateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutUserInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";
export declare class SubscriptionsOnPremisesCreateNestedManyWithoutUserInput {
    create?: SubscriptionsOnPremisesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: SubscriptionsOnPremisesCreateManyUserInputEnvelope | undefined;
    connect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
}
