import { ThreadCreateNestedOneWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateNestedOneWithoutReactionOnThreadsInput";
export declare class ReactionOnThreadsCreateWithoutUserInput {
    thread: ThreadCreateNestedOneWithoutReactionOnThreadsInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
