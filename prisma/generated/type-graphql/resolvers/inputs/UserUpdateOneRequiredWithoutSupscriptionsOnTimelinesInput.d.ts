import { UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput";
import { UserCreateWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSupscriptionsOnTimelinesInput";
import { UserUpdateWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserUpdateWithoutSupscriptionsOnTimelinesInput";
import { UserUpsertWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserUpsertWithoutSupscriptionsOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput {
    create?: UserCreateWithoutSupscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput | undefined;
    upsert?: UserUpsertWithoutSupscriptionsOnTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutSupscriptionsOnTimelinesInput | undefined;
}
