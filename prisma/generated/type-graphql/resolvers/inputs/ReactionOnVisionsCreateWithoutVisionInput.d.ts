import { UserCreateNestedOneWithoutReactionOnVisionsInput } from "../inputs/UserCreateNestedOneWithoutReactionOnVisionsInput";
export declare class ReactionOnVisionsCreateWithoutVisionInput {
    user: UserCreateNestedOneWithoutReactionOnVisionsInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
