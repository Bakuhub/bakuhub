import { UserCreateOrConnectWithoutReactionOnThreadsInput } from "../inputs/UserCreateOrConnectWithoutReactionOnThreadsInput";
import { UserCreateWithoutReactionOnThreadsInput } from "../inputs/UserCreateWithoutReactionOnThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutReactionOnThreadsInput {
    create?: UserCreateWithoutReactionOnThreadsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionOnThreadsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
