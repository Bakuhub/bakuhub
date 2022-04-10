import { UserCreateOrConnectWithoutVotesOnVisionInput } from "../inputs/UserCreateOrConnectWithoutVotesOnVisionInput";
import { UserCreateWithoutVotesOnVisionInput } from "../inputs/UserCreateWithoutVotesOnVisionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutVotesOnVisionInput {
    create?: UserCreateWithoutVotesOnVisionInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnVisionInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
