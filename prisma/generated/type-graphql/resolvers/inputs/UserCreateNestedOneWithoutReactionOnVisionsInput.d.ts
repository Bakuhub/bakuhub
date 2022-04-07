import { UserCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/UserCreateOrConnectWithoutReactionOnVisionsInput";
import { UserCreateWithoutReactionOnVisionsInput } from "../inputs/UserCreateWithoutReactionOnVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutReactionOnVisionsInput {
    create?: UserCreateWithoutReactionOnVisionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionOnVisionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
