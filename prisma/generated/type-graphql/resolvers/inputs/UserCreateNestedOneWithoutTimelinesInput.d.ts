import { UserCreateOrConnectWithoutTimelinesInput } from "../inputs/UserCreateOrConnectWithoutTimelinesInput";
import { UserCreateWithoutTimelinesInput } from "../inputs/UserCreateWithoutTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutTimelinesInput {
    create?: UserCreateWithoutTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
