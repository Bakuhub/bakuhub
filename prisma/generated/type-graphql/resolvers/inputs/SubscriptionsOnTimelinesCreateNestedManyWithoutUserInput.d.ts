import { SubscriptionsOnTimelinesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyUserInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
export declare class SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput {
    create?: SubscriptionsOnTimelinesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: SubscriptionsOnTimelinesCreateManyUserInputEnvelope | undefined;
    connect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
}
