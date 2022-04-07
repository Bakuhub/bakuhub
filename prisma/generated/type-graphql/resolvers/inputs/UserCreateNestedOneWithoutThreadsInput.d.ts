import { UserCreateOrConnectWithoutThreadsInput } from "../inputs/UserCreateOrConnectWithoutThreadsInput";
import { UserCreateWithoutThreadsInput } from "../inputs/UserCreateWithoutThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutThreadsInput {
    create?: UserCreateWithoutThreadsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
