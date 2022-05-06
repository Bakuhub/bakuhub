import { UserCreateOrConnectWithoutThreadsInput } from "../inputs/UserCreateOrConnectWithoutThreadsInput";
import { UserCreateWithoutThreadsInput } from "../inputs/UserCreateWithoutThreadsInput";
import { UserUpdateWithoutThreadsInput } from "../inputs/UserUpdateWithoutThreadsInput";
import { UserUpsertWithoutThreadsInput } from "../inputs/UserUpsertWithoutThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutThreadsInput {
    create?: UserCreateWithoutThreadsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput | undefined;
    upsert?: UserUpsertWithoutThreadsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutThreadsInput | undefined;
}
