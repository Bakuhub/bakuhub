import { UserCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/UserCreateOrConnectWithoutVotesOnTimelineInput";
import { UserCreateWithoutVotesOnTimelineInput } from "../inputs/UserCreateWithoutVotesOnTimelineInput";
import { UserUpdateWithoutVotesOnTimelineInput } from "../inputs/UserUpdateWithoutVotesOnTimelineInput";
import { UserUpsertWithoutVotesOnTimelineInput } from "../inputs/UserUpsertWithoutVotesOnTimelineInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutVotesOnTimelineInput {
    create?: UserCreateWithoutVotesOnTimelineInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnTimelineInput | undefined;
    upsert?: UserUpsertWithoutVotesOnTimelineInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutVotesOnTimelineInput | undefined;
}
