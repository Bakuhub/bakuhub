import { UserCreateNestedOneWithoutVotesOnTimelineInput } from "../inputs/UserCreateNestedOneWithoutVotesOnTimelineInput";
export declare class VotesOnTimelineCreateWithoutTimelineInput {
    user: UserCreateNestedOneWithoutVotesOnTimelineInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
}
