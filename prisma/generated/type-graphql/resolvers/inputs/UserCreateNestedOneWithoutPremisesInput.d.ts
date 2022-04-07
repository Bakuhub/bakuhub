import { UserCreateOrConnectWithoutPremisesInput } from "../inputs/UserCreateOrConnectWithoutPremisesInput";
import { UserCreateWithoutPremisesInput } from "../inputs/UserCreateWithoutPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPremisesInput {
    create?: UserCreateWithoutPremisesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPremisesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
