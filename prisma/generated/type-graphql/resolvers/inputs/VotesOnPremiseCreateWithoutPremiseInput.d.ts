import { UserCreateNestedOneWithoutVotesOnPremiseInput } from "../inputs/UserCreateNestedOneWithoutVotesOnPremiseInput";
export declare class VotesOnPremiseCreateWithoutPremiseInput {
    user: UserCreateNestedOneWithoutVotesOnPremiseInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
}
