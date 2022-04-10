import { UserCreateOrConnectWithoutVotesOnThreadInput } from "../inputs/UserCreateOrConnectWithoutVotesOnThreadInput";
import { UserCreateWithoutVotesOnThreadInput } from "../inputs/UserCreateWithoutVotesOnThreadInput";
import { UserUpdateWithoutVotesOnThreadInput } from "../inputs/UserUpdateWithoutVotesOnThreadInput";
import { UserUpsertWithoutVotesOnThreadInput } from "../inputs/UserUpsertWithoutVotesOnThreadInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutVotesOnThreadInput {
    create?: UserCreateWithoutVotesOnThreadInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnThreadInput | undefined;
    upsert?: UserUpsertWithoutVotesOnThreadInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutVotesOnThreadInput | undefined;
}
