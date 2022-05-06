import { UserCreateOrConnectWithoutVisionsInput } from "../inputs/UserCreateOrConnectWithoutVisionsInput";
import { UserCreateWithoutVisionsInput } from "../inputs/UserCreateWithoutVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutVisionsInput {
    create?: UserCreateWithoutVisionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVisionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
