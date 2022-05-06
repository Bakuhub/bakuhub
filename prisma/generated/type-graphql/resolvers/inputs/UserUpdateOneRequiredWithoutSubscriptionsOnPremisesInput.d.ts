import { UserCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { UserCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateWithoutSubscriptionsOnPremisesInput";
import { UserUpdateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpdateWithoutSubscriptionsOnPremisesInput";
import { UserUpsertWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpsertWithoutSubscriptionsOnPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput {
    create?: UserCreateWithoutSubscriptionsOnPremisesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;
    upsert?: UserUpsertWithoutSubscriptionsOnPremisesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutSubscriptionsOnPremisesInput | undefined;
}
