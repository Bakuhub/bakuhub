import { UserCreateOrConnectWithoutPremisesInput } from "../inputs/UserCreateOrConnectWithoutPremisesInput";
import { UserCreateWithoutPremisesInput } from "../inputs/UserCreateWithoutPremisesInput";
import { UserUpdateWithoutPremisesInput } from "../inputs/UserUpdateWithoutPremisesInput";
import { UserUpsertWithoutPremisesInput } from "../inputs/UserUpsertWithoutPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutPremisesInput {
    create?: UserCreateWithoutPremisesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPremisesInput | undefined;
    upsert?: UserUpsertWithoutPremisesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutPremisesInput | undefined;
}
