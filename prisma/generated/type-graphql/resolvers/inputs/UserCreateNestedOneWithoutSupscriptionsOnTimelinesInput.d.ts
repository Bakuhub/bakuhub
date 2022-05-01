import { UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput";
import { UserCreateWithoutSupscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSupscriptionsOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput {
    create?: UserCreateWithoutSupscriptionsOnTimelinesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
