import { TimelineCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutReactionOnTimelinesInput";
export declare class ReactionOnTimelinesCreateWithoutUserInput {
    timeline: TimelineCreateNestedOneWithoutReactionOnTimelinesInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
