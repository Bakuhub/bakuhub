import { UserCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/UserCreateOrConnectWithoutReactionOnVisionsInput";
import { UserCreateWithoutReactionOnVisionsInput } from "../inputs/UserCreateWithoutReactionOnVisionsInput";
import { UserUpdateWithoutReactionOnVisionsInput } from "../inputs/UserUpdateWithoutReactionOnVisionsInput";
import { UserUpsertWithoutReactionOnVisionsInput } from "../inputs/UserUpsertWithoutReactionOnVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutReactionOnVisionsInput {
    create?: UserCreateWithoutReactionOnVisionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionOnVisionsInput | undefined;
    upsert?: UserUpsertWithoutReactionOnVisionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutReactionOnVisionsInput | undefined;
}
