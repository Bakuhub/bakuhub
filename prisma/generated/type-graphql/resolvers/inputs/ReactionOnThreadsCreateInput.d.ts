import { ThreadCreateNestedOneWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateNestedOneWithoutReactionOnThreadsInput";
import { UserCreateNestedOneWithoutReactionOnThreadsInput } from "../inputs/UserCreateNestedOneWithoutReactionOnThreadsInput";
export declare class ReactionOnThreadsCreateInput {
    user: UserCreateNestedOneWithoutReactionOnThreadsInput;
    thread: ThreadCreateNestedOneWithoutReactionOnThreadsInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
