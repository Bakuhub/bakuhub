import { UserCreateOrConnectWithoutVotesOnThreadInput } from "../inputs/UserCreateOrConnectWithoutVotesOnThreadInput";
import { UserCreateWithoutVotesOnThreadInput } from "../inputs/UserCreateWithoutVotesOnThreadInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutVotesOnThreadInput {
    create?: UserCreateWithoutVotesOnThreadInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnThreadInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
