import { PremiseCreateNestedOneWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutVotesOnPremiseInput";
import { UserCreateNestedOneWithoutVotesOnPremiseInput } from "../inputs/UserCreateNestedOneWithoutVotesOnPremiseInput";
export declare class VotesOnPremiseCreateInput {
    user: UserCreateNestedOneWithoutVotesOnPremiseInput;
    premise: PremiseCreateNestedOneWithoutVotesOnPremiseInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
