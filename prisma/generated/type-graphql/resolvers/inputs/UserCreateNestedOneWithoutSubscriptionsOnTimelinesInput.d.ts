import { UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { UserCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput {
    create?: UserCreateWithoutSubscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
