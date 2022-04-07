import { UserCreateOrConnectWithoutReactionOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutReactionOnTimelinesInput";
import { UserCreateWithoutReactionOnTimelinesInput } from "../inputs/UserCreateWithoutReactionOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutReactionOnTimelinesInput {
    create?: UserCreateWithoutReactionOnTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionOnTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
