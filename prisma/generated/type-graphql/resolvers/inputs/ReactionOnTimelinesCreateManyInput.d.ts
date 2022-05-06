export declare class ReactionOnTimelinesCreateManyInput {
    userId: string;
    timelineId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt?: Date | undefined;
}
