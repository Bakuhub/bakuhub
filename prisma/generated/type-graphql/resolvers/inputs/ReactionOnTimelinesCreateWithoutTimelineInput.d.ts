import { UserCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutReactionOnTimelinesInput";
export declare class ReactionOnTimelinesCreateWithoutTimelineInput {
    user: UserCreateNestedOneWithoutReactionOnTimelinesInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
