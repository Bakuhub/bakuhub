import { UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { UserCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput";
import { UserUpdateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserUpdateWithoutSubscriptionsOnTimelinesInput";
import { UserUpsertWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserUpsertWithoutSubscriptionsOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput {
    create?: UserCreateWithoutSubscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;
    upsert?: UserUpsertWithoutSubscriptionsOnTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutSubscriptionsOnTimelinesInput | undefined;
}
