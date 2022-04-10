import { UserCreateOrConnectWithoutVotesOnVisionInput } from "../inputs/UserCreateOrConnectWithoutVotesOnVisionInput";
import { UserCreateWithoutVotesOnVisionInput } from "../inputs/UserCreateWithoutVotesOnVisionInput";
import { UserUpdateWithoutVotesOnVisionInput } from "../inputs/UserUpdateWithoutVotesOnVisionInput";
import { UserUpsertWithoutVotesOnVisionInput } from "../inputs/UserUpsertWithoutVotesOnVisionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutVotesOnVisionInput {
    create?: UserCreateWithoutVotesOnVisionInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnVisionInput | undefined;
    upsert?: UserUpsertWithoutVotesOnVisionInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutVotesOnVisionInput | undefined;
}
