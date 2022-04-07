import { UserCreateOrConnectWithoutTimelinesInput } from "../inputs/UserCreateOrConnectWithoutTimelinesInput";
import { UserCreateWithoutTimelinesInput } from "../inputs/UserCreateWithoutTimelinesInput";
import { UserUpdateWithoutTimelinesInput } from "../inputs/UserUpdateWithoutTimelinesInput";
import { UserUpsertWithoutTimelinesInput } from "../inputs/UserUpsertWithoutTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutTimelinesInput {
    create?: UserCreateWithoutTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput | undefined;
    upsert?: UserUpsertWithoutTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutTimelinesInput | undefined;
}
