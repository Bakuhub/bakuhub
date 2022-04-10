import { UserCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/UserCreateOrConnectWithoutVotesOnTimelineInput";
import { UserCreateWithoutVotesOnTimelineInput } from "../inputs/UserCreateWithoutVotesOnTimelineInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutVotesOnTimelineInput {
    create?: UserCreateWithoutVotesOnTimelineInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnTimelineInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
