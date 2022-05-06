import { UserCreateOrConnectWithoutReactionOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutReactionOnTimelinesInput";
import { UserCreateWithoutReactionOnTimelinesInput } from "../inputs/UserCreateWithoutReactionOnTimelinesInput";
import { UserUpdateWithoutReactionOnTimelinesInput } from "../inputs/UserUpdateWithoutReactionOnTimelinesInput";
import { UserUpsertWithoutReactionOnTimelinesInput } from "../inputs/UserUpsertWithoutReactionOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutReactionOnTimelinesInput {
    create?: UserCreateWithoutReactionOnTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionOnTimelinesInput | undefined;
    upsert?: UserUpsertWithoutReactionOnTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutReactionOnTimelinesInput | undefined;
}
