import { UserCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { UserCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateWithoutSubscriptionsOnPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSubscriptionsOnPremisesInput {
    create?: UserCreateWithoutSubscriptionsOnPremisesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
