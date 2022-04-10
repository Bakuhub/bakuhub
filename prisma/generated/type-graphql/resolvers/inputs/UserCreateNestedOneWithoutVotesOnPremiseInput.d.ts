import { UserCreateOrConnectWithoutVotesOnPremiseInput } from "../inputs/UserCreateOrConnectWithoutVotesOnPremiseInput";
import { UserCreateWithoutVotesOnPremiseInput } from "../inputs/UserCreateWithoutVotesOnPremiseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutVotesOnPremiseInput {
    create?: UserCreateWithoutVotesOnPremiseInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnPremiseInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
