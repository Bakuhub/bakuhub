import { UserCreateNestedOneWithoutReactionOnThreadsInput } from "../inputs/UserCreateNestedOneWithoutReactionOnThreadsInput";
export declare class ReactionOnThreadsCreateWithoutThreadInput {
    user: UserCreateNestedOneWithoutReactionOnThreadsInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
