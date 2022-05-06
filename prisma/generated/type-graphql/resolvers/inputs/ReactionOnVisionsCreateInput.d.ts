import { UserCreateNestedOneWithoutReactionOnVisionsInput } from "../inputs/UserCreateNestedOneWithoutReactionOnVisionsInput";
import { VisionCreateNestedOneWithoutReactionOnVisionsInput } from "../inputs/VisionCreateNestedOneWithoutReactionOnVisionsInput";
export declare class ReactionOnVisionsCreateInput {
    user: UserCreateNestedOneWithoutReactionOnVisionsInput;
    vision: VisionCreateNestedOneWithoutReactionOnVisionsInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
