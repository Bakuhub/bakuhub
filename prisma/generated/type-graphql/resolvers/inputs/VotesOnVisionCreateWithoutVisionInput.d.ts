import { UserCreateNestedOneWithoutVotesOnVisionInput } from "../inputs/UserCreateNestedOneWithoutVotesOnVisionInput";
export declare class VotesOnVisionCreateWithoutVisionInput {
    user: UserCreateNestedOneWithoutVotesOnVisionInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
}
