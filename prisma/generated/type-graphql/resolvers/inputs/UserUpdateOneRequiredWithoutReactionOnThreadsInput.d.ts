import { UserCreateOrConnectWithoutReactionOnThreadsInput } from "../inputs/UserCreateOrConnectWithoutReactionOnThreadsInput";
import { UserCreateWithoutReactionOnThreadsInput } from "../inputs/UserCreateWithoutReactionOnThreadsInput";
import { UserUpdateWithoutReactionOnThreadsInput } from "../inputs/UserUpdateWithoutReactionOnThreadsInput";
import { UserUpsertWithoutReactionOnThreadsInput } from "../inputs/UserUpsertWithoutReactionOnThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutReactionOnThreadsInput {
    create?: UserCreateWithoutReactionOnThreadsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionOnThreadsInput | undefined;
    upsert?: UserUpsertWithoutReactionOnThreadsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutReactionOnThreadsInput | undefined;
}
