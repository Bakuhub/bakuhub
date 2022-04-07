import { UserCreateOrConnectWithoutVisionsInput } from "../inputs/UserCreateOrConnectWithoutVisionsInput";
import { UserCreateWithoutVisionsInput } from "../inputs/UserCreateWithoutVisionsInput";
import { UserUpdateWithoutVisionsInput } from "../inputs/UserUpdateWithoutVisionsInput";
import { UserUpsertWithoutVisionsInput } from "../inputs/UserUpsertWithoutVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutVisionsInput {
    create?: UserCreateWithoutVisionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVisionsInput | undefined;
    upsert?: UserUpsertWithoutVisionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutVisionsInput | undefined;
}
