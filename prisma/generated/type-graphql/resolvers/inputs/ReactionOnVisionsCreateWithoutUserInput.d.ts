import { VisionCreateNestedOneWithoutReactionOnVisionsInput } from "../inputs/VisionCreateNestedOneWithoutReactionOnVisionsInput";
export declare class ReactionOnVisionsCreateWithoutUserInput {
    vision: VisionCreateNestedOneWithoutReactionOnVisionsInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
