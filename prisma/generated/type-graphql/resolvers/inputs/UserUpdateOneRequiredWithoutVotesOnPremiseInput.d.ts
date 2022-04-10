import { UserCreateOrConnectWithoutVotesOnPremiseInput } from "../inputs/UserCreateOrConnectWithoutVotesOnPremiseInput";
import { UserCreateWithoutVotesOnPremiseInput } from "../inputs/UserCreateWithoutVotesOnPremiseInput";
import { UserUpdateWithoutVotesOnPremiseInput } from "../inputs/UserUpdateWithoutVotesOnPremiseInput";
import { UserUpsertWithoutVotesOnPremiseInput } from "../inputs/UserUpsertWithoutVotesOnPremiseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutVotesOnPremiseInput {
    create?: UserCreateWithoutVotesOnPremiseInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnPremiseInput | undefined;
    upsert?: UserUpsertWithoutVotesOnPremiseInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutVotesOnPremiseInput | undefined;
}
