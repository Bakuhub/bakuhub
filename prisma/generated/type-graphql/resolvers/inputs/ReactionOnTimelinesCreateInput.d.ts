import { TimelineCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutReactionOnTimelinesInput";
import { UserCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutReactionOnTimelinesInput";
export declare class ReactionOnTimelinesCreateInput {
    user: UserCreateNestedOneWithoutReactionOnTimelinesInput;
    timeline: TimelineCreateNestedOneWithoutReactionOnTimelinesInput;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
