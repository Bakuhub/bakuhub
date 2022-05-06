import { UserCreateNestedOneWithoutVotesOnThreadInput } from "../inputs/UserCreateNestedOneWithoutVotesOnThreadInput";
export declare class VotesOnThreadCreateWithoutThreadInput {
    user: UserCreateNestedOneWithoutVotesOnThreadInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
