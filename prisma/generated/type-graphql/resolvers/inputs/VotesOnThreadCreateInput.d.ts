import { ThreadCreateNestedOneWithoutVotesOnThreadInput } from "../inputs/ThreadCreateNestedOneWithoutVotesOnThreadInput";
import { UserCreateNestedOneWithoutVotesOnThreadInput } from "../inputs/UserCreateNestedOneWithoutVotesOnThreadInput";
export declare class VotesOnThreadCreateInput {
    user: UserCreateNestedOneWithoutVotesOnThreadInput;
    thread: ThreadCreateNestedOneWithoutVotesOnThreadInput;
    vote?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
